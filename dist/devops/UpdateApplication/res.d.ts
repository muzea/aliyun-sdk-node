export interface UpdateApplicationResponse {
    /**
     * 创建者阿里云UID
     * @example `1332695887xxxxxx`
     */
    creatorAccountId: string;
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `FC93CE1A-8D7A-13A9-8306-7465DE2E5C0F`
     */
    requestId: string;
    /**
     * 应用名
     * @example `testApp`
     */
    name: string;
    /**
     * 创建时间
     * @example `2024-01-01T00:00:00.000+00:00`
     */
    gmtCreate: string;
    /**
     * 应用描述
     * @example `应用描述`
     */
    description: string;
}
