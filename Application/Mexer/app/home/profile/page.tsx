'use client'

import { useState } from 'react';
import {Input, Select, SelectItem} from "@nextui-org/react";

export default function Profile() {
    const initialFormData = {
        username: "thanhdatngo@gmail.com",
        oldPassword: "",
        newPassword: "",
        verifyPassword: ""
    };

    const [formData, setFormData] = useState(initialFormData);
    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleCancelClick = () => {
        setFormData(initialFormData); // Reset form data to initial values
        setIsEditMode(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form state if needed
        setIsEditMode(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-20">
                      <div className="form-group flex flex-col">
                        <label htmlFor="pre-name" className="form-label">Danh xưng</label>
                        <Select
                            label="Danh xưng"
                            className="pre-name"
                            variant="flat"
                        >
                            <SelectItem key="mr">
                                Anh
                            </SelectItem>
                            <SelectItem key="ms">
                                Chị
                            </SelectItem>
                        </Select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label mb-2">Họ và tên</label>
                        <Input id="name" type="text" label="Nhập họ và tên" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label mb-2">Email</label>
                        <Input id="email" type="email" label="Nhập email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label mb-2">Số điện thoại</label>
                        <Input id="phone" type="phone" label="Nhập số điện thoại" />
                    </div>
                </div>
            </form>
        </div>
    );
}