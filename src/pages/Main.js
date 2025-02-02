import React from 'react'
import '../css/main.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { FaBell } from 'react-icons/fa';

const Main = () => {
    return (
        <div className='full_box'>
            <div className='portfolio_screen'>
                <div className='top_button_section'>
                    <div className='top_button_box'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='top_portfolio_text_box'>
                        <div>
                            <div>
                                <AiOutlinePlus />
                            </div>
                            <div>
                                <h3 style={{
                                    fontSize: '1.5rem'
                                }}>PORTFOLIO</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wallpaper_screen'>
                    <FaBell />
                    <div className='Notification_window'>
                        <div>
                            <h2>새로운 포트폴리오가 도착했습니다 !</h2>
                            <h1>안녕하세요, <span>김혜수</span>님의 포트폴리오입니다.</h1>
                            <h5>[웹퍼블리셔]</h5>
                            <button>포트폴리오 보기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main