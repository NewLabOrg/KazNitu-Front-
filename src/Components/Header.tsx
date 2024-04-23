import React, { useState, useEffect } from 'react';
import AuthModal from "./AuthModal.tsx";

const Header = (): any => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <div>

            <h1 className="text-center text-6xl font-bold text-red-500">КазНИТУ Analytics</h1>


            <menu>
                {isLoggedIn ? (
                    <AuthenticatedMenu />
                ) : (
                    <UnauthenticatedMenu />
                )}
            </menu>

        </div>
    )
}

function AuthenticatedMenu() {
    return (
        <div>
            <p>Меню для авторизованных пользователей</p>
        </div>
    );
}

function UnauthenticatedMenu() {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">Добро пожаловать в KazNITU Analytics!</h1>
                <div className="max-w-3xl mx-auto">
                    <p className="text-lg text-gray-700 mb-4">
                        Откройте для себя мир международных рейтингов и анализа данных вузов с помощью нашей информационной системы.
                    </p>
                    <div className="text-left">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ключевые особенности нашей информационной системы:</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li className="mb-2">Удобство: Быстрый и легкий доступ к данным о международных рейтингах вашего университета.</li>
                            <li className="mb-2">Анализ: Возможность сравнения вашего университета с другими вузами по всему миру и проведения глубокого анализа данных.</li>
                            <li>Полезность: Предназначена для студентов, преподавателей, исследователей и администрации университета.</li>
                        </ul>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Цель нашей системы:</h2>
                        <p className="text-lg text-gray-700">
                            Мы стремимся сделать процесс работы с данными более простым и эффективным. Наша цель - обеспечить вам быстрый и удобный доступ к информации о международных рейтингах вузов и предоставить вам возможность проводить аналитические исследования, основанные на этих данных.
                        </p>
                    </div>
                    <p className="text-lg text-gray-700 mt-4">
                        Присоединяйтесь к нам сегодня и начните исследовать мир данных вузов прямо сейчас!
                    </p>
                    <div className="flex justify-center space-x-4 mt-8">
                        <AuthModal/>
                    </div>
                </div>
            </div>
        </div>
    );
}

    export default Header;