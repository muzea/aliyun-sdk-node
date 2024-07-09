export interface GetTitleIntelligenceResponse {
    /**
     * 状态码，200 表示正常
     * @example `200`
     */
    Code: number;
    /**
     * 如果有错误，会输出错误信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求唯一串，方便后期排查定位问题
     * @example `D70487B4-8891-4D24-BB64-8788E53671FB`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 自动生成的标题信息
         * @example `Custom Hello Kitty PVC Cartoon Apple for Home Garden Complete Apple Bath Shower`
         */
        Titles: string;
    };
}
