export interface GetAppInfosRequest {
    /**
     * 应用ID列表。由一个或多个应用ID组成，应用ID为调用[创建应用](~~113266~~)接口或[获取应用信息列表](~~114000~~)接口返回参数AppId的值。
     * - 最多支持10个ID。
     * - 多个ID之间使用半角逗号（,）分隔。
     * @example `app-****`
     */
    "AppIds": string;
}
