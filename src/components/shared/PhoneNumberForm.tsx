import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
// Import CSS mặc định của thư viện để hiển thị cờ và layout đẹp mắt
import 'react-phone-number-input/style.css';

export const PhoneNumberForm: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            phone: '',
        },
    });

    const onSubmit = (data: any) => {
        alert(`Valid data: ${JSON.stringify(data)}`);
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h2>Enter Phone Number</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Sử dụng Controller để bọc PhoneInput */}
                <Controller
                    name="phone"
                    control={control}
                    rules={{
                        required: 'Phone number is required',
                        validate: (value) =>
                            isValidPhoneNumber(value) || 'Phone number is invalid',
                    }}
                    render={({ field: { onChange, value } }) => (
                        <PhoneInput
                            placeholder="Enter phone number..."
                            value={value}
                            onChange={onChange}
                            defaultCountry="VN" // Set default country to Vietnam
                            id="phone-input"
                        />
                    )}
                />

                {/* Show error if any */}
                {errors.phone && (
                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                        {errors.phone.message}
                    </p>
                )}

                <button
                    type="submit"
                    style={{ marginTop: '15px', padding: '10px 20px', cursor: 'pointer' }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}