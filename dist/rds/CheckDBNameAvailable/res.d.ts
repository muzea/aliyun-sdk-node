export interface CheckDBNameAvailableResponse {
    /**
     * 请求ID。
     * >仅返回请求ID时，表示数据库名称可用，否则会返回报错信息，提示数据库名称重复或不符合命名规范。
     * @example `6EF82B07-28D2-48D1-B5D6-7E78FED277C7`
     */
    RequestId: string;
}
