import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const AuthModal = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

    const openLoginModal = () => {
        setIsLoginOpen(true);
        setIsRegistrationOpen(false);
    };

    const openRegistrationModal = () => {
        setIsRegistrationOpen(true);
        setIsLoginOpen(false);
    };

    const closeModals = () => {
        setIsLoginOpen(false);
        setIsRegistrationOpen(false);
    };

    return (
        <div>
            <button onClick={openLoginModal} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline">
                Войти
            </button>
            <button onClick={openRegistrationModal} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline">
                Зарегистрироваться
            </button>

            {isLoginOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="absolute bg-black bg-opacity-50 w-full h-full" onClick={closeModals}></div>
                    <div className="z-10 bg-white p-6 rounded-lg">
                        <LoginForm />
                        <button onClick={closeModals} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700">
                            Закрыть
                        </button>
                    </div>
                </div>
            )}

            {isRegistrationOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="absolute bg-black bg-opacity-50 w-full h-full" onClick={closeModals}></div>
                    <div className="z-10 bg-white p-6 rounded-lg">
                        <RegistrationForm />
                        <button onClick={closeModals} className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700">
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthModal;
