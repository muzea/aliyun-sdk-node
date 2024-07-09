export interface GetLogoFontListResponse {
    /**
     * 调用是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `8F007088-FD52-596E-8688-D7AE887D8329`
     */
    RequestId: string;
    /**
     * 返回的fort信息列表
     */
    Fonts: {
        /**
         * 字体id
         * @example `dfs`
         */
        FontId: string;
        /**
         * 任务名称
         * @example `MyFamily`
         */
        Name: string;
        /**
         * 原图
         * @example `18622562726`
         */
        Image: string;
    }[];
}
