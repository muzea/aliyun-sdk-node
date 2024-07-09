export interface DescribeAccountStatResponse {
    /**
     * 当前模板数。
     * @example `10`
     */
    TemplateNum: number;
    /**
     * 最大设备空间数。
     * @example `100`
     */
    GroupLimit: number;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 最大模板数。
     * @example `20`
     */
    TemplateLimit: number;
    /**
     * 当前服务地域下的空间数。
     * @example `6`
     */
    GroupNum: number;
    /**
     * 主账号ID。
     * @example `1165*****601`
     */
    Id: string;
}
