export interface DescribeAppResponse {
    /**
     * App名称
     * @example `CreateApptest`
     */
    AppName: string;
    /**
     * 本次请求的ID。
     * @example `DBDB3B0F-EC61-5F33-88AD-EC2446FA1DDB`
     */
    RequestId: string;
    /**
     * app修改时间
     * @example `2019-01-29T09:33:01Z`
     */
    ModifiedTime: string;
    /**
     * app描述信息
     * @example `2021年10月15日10:20:27测算`
     */
    Description: string;
    /**
     * App的唯一标识
     * @example `110843374`
     */
    AppId: number;
    /**
     * 创建时间
     * @example `2019-01-29T09:33:01Z`
     */
    CreatedTime: string;
    /**
     * 扩展信息
     * @example `110243810311`
     */
    Extend: string;
}
