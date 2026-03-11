"use client"

import { useState } from 'react'
import emailjs from "@emailjs/browser"
import dynamic from "next/dynamic"

const Select = dynamic(() => import("react-select"), { ssr: false })

export default function Contact() {

    const [formData, setFormData] = useState({
        topic: '',
        paperType: '',
        deadline: '',
        pages: '',
        academicLevel: '',
        referenceStyle: '',
        details: '',
        name: '',
        email: '',
        country: '',
        phone: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSelect = (name, option) => {
        setFormData({ ...formData, [name]: option?.value || '' })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send(
            "service_74i1m72",
            "template_ue6fsjl",
            formData,
            "Jnn828R1UWARJ3X2_"
        )
            .then(() => {
                alert("Order submitted successfully!")

                setFormData({
                    topic: '',
                    paperType: '',
                    deadline: '',
                    pages: '',
                    academicLevel: '',
                    referenceStyle: '',
                    details: '',
                    name: '',
                    email: '',
                    country: '',
                    phone: ''
                })
            })
            .catch(() => {
                alert("Failed to send order")
            })
    }

    const selectStyles = {
        control: (base, state) => ({
            ...base,
            borderRadius: "12px",
            padding: "4px",
            borderColor: state.isFocused ? "#059669" : "#d1d5db",
            boxShadow: state.isFocused ? "0 0 0 2px #05966933" : "none",
            '&:hover': { borderColor: "#059669" }
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#059669" : "white",
            color: state.isFocused ? "white" : "#111827",
            cursor: "pointer"
        })
    }

    const paperTypes = [
        { value: "Assignment", label: "Assignment" },
        { value: "Research Paper", label: "Research Paper" },
        { value: "Thesis", label: "Thesis" },
        { value: "Essay", label: "Essay" }
    ]

    const deadlines = [
        { value: "15 Days", label: "15 Days" },
        { value: "10 Days", label: "10 Days" },
        { value: "7 Days", label: "7 Days" },
        { value: "5 Days", label: "5 Days" },
        { value: "3 Days", label: "3 Days" },
        { value: "48 Hours", label: "48 Hours" },
        { value: "24 Hours", label: "24 Hours" },
        { value: "12 Hours", label: "12 Hours" },
        { value: "6 Hours", label: "6 Hours" }
    ]

    const levels = [
        { value: "Undergraduate", label: "Undergraduate" },
        { value: "Master", label: "Master" },
        { value: "PhD", label: "PhD" }
    ]

    const referenceStyles = [
        { value: "APA", label: "APA" },
        { value: "Harvard", label: "Harvard" },
        { value: "MLA", label: "MLA" },
        { value: "Chicago", label: "Chicago" }
    ]

    const pages = Array.from({ length: 20 }, (_, i) => ({
        value: i + 1,
        label: `${i + 1} Pages (${(i + 1) * 300} Words)`
    }))

    return (
        <section className="bg-[#F8FAFC] text-[#111827] py-20 px-4 font-[Inter]">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl md:text-4xl font-bold mb-4 font-[Poppins]">
                    Order <span className="text-[#059669]">Details</span>
                </h1>

                <p className="text-gray-600 mb-3">
                    The more specific you are in your order, the easier it will be for a writer to complete it.
                </p>

                <p className="text-sm text-gray-500 mb-10">
                    Fields marked with <span className="text-red-500">*</span> are required
                </p>

                <form onSubmit={handleSubmit} className="space-y-14">

                    <div className="grid md:grid-cols-2 gap-8">

                        <Input label="Paper Topic" name="topic" value={formData.topic} onChange={handleChange} />

                        <CustomSelect
                            label="Paper Type"
                            options={paperTypes}
                            onChange={(opt) => handleSelect("paperType", opt)}
                            styles={selectStyles}
                        />

                        <CustomSelect
                            label="Deadline"
                            options={deadlines}
                            onChange={(opt) => handleSelect("deadline", opt)}
                            styles={selectStyles}
                        />

                        <CustomSelect
                            label="Academic Level"
                            options={levels}
                            onChange={(opt) => handleSelect("academicLevel", opt)}
                            styles={selectStyles}
                        />

                        <CustomSelect
                            label="No of Pages"
                            options={pages}
                            onChange={(opt) => handleSelect("pages", opt)}
                            styles={selectStyles}
                        />

                        <CustomSelect
                            label="Reference Style"
                            options={referenceStyles}
                            onChange={(opt) => handleSelect("referenceStyle", opt)}
                            styles={selectStyles}
                        />

                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-700">
                            Detail <span className="text-red-500">*</span>
                        </label>

                        <textarea
                            name="details"
                            required
                            rows="5"
                            value={formData.details}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-[#059669]"
                            placeholder="Type details here..."
                        />

                    </div>

                    <div>

                        <h2 className="text-2xl font-bold mb-6 text-[#059669] font-[Poppins]">
                            Personal Details
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">

                            <Input label="Full Name" required name="name" value={formData.name} onChange={handleChange} />

                            <Input label="Email Address" type="email" required name="email" value={formData.email} onChange={handleChange} />

                            <Input label="Country" name="country" value={formData.country} onChange={handleChange} />

                            <Input label="Contact Number" required name="phone" value={formData.phone} onChange={handleChange} />

                        </div>

                    </div>

                    <div className="text-center">

                        <button
                            type="submit"
                            className="bg-[#059669] hover:bg-[#047857] text-white px-10 py-3 rounded-xl font-semibold text-lg transition shadow-lg shadow-[#059669]/30"
                        >
                            Order Submit
                        </button>

                    </div>

                </form>

            </div>

        </section>
    )
}


function Input({ label, required, ...props }) {
    return (
        <div>
            <label className="block mb-2 text-sm text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <input
                required={required}
                {...props}
                className="w-full bg-gray-50 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-[#059669]"
            />

        </div>
    )
}


function CustomSelect({ label, options, onChange, styles }) {

    return (
        <div>

            <label className="block mb-2 text-sm text-gray-700">
                {label} <span className="text-red-500">*</span>
            </label>

            <Select
                instanceId={label}
                options={options}
                onChange={onChange}
                styles={styles}
                placeholder="Select..."
            />

        </div>
    )
}