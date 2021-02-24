const Cover = () => {
    return (
        <div className="layout">
            <div className="cover">
                <div className="cover-head">
                    <div className="cover-label">Акция</div>
                    <h1 className="cover-title">
                        На самовывоз
                    </h1>
                </div>
                
                <div className="cover-body">
                    <div className="cover-desc">
                        Для всех любителей самовывоза мы дарим скидку на ваши любимые пиццу и роллы. Подпишись на секретную рассылку в группе VK и не пропустите следующую скидку...
                    </div>
                    <div className="cover-text">
                        Акция действует по специальной ссылке в день анонса c 10:00 до 16:00.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;