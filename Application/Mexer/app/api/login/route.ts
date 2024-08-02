"use server"
import validateUsername from "@/app/helpers/valusername";
import validatePassword from "@/app/helpers/valpassword";
import fs from "fs/promises";
import bcrypt from 'bcrypt';

interface User {
  user_id: number;
  username: string;
  password: string;
}

export async function POST(request: Request) {
  // Trả body từ json
  const body = await request.json();
  const { username, password } = body;
  
  // Validate data
  if (!validateUsername(username)) {
    return Response.json(
      {
        error: { username: "Tên đăng nhập không hợp lệ" },
      },
      { status: 400 }
    );
  }
  if (!validatePassword(password)) {
    return Response.json(
      {
        error: { password: "Mật khẩu không hợp lệ" },
      },
      { status: 400 }
    );
  }

  // Search for user
  const dataPath = "./app/data.json"
  const data = await fs.readFile(dataPath, 'utf8');
  const users: User[] = JSON.parse(data);

  const user = users.find(u => u.username === username);


  if (!user) {
    return Response.json(
      {
        error: { username: "Tên đăng nhập không tồn tại" },
      },
      { status: 400 }
    );
  }

  const isCorrectPassword = bcrypt.compareSync(password, user.password)

  if (!isCorrectPassword) {
    return Response.json(
      {
        error: { password: "Mật khẩu không đúng" },
      },
      { status: 400 }
    );
  }

  // If validation passes
  return Response.json(
    {
      message: "Đăng nhập thành công",
    },
    { status: 201 }
  );
}
