export interface CreateMseServiceApplicationResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `904F6C04-1284-****-8ED2-FFC57E507A72`
     */
    RequestId: string;
    /**
     * 数据结构。
     */
    Data: {
        /**
         * 状态。1表示可用状态，2表示删除状态。
         * @example `1`
         */
        Status: number;
        /**
         * 额外信息。
         * @example `{}`
         */
        ExtraInfo: string;
        /**
         * 应用名称。
         * @example `spring-cloud-a`
         */
        AppName: string;
        /**
         * 最后更新时间。
         * @example `1632979237663`
         */
        UpdateTime: number;
        /**
         * 用户的对应的LicenseKey。
         * @example `xxxxxxxx@xxxxxxxxxx`
         */
        LicenseKey: string;
        /**
         * 创建时间。
         * @example `1631001140913`
         */
        CreateTime: number;
        /**
         * 应用ID。
         * @example `xxxxxxxx@xxxxxxxxxx`
         */
        AppId: string;
        /**
         * 用户ID。
         * @example `1234567890`
         */
        UserId: string;
        /**
         * 来源类型。
         * @example `edasmsc`
         */
        Source: string;
        /**
         * 应用的编程语言。
         * @example `JAVA`
         */
        Language: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 版本信息。
         * @example `1.0.0`
         */
        Version: string;
    };
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: string;
}
