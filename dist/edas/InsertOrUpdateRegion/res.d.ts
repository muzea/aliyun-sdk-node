export interface InsertOrUpdateRegionResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `37793352-C568-4A5A-BF69-4DC853******`
     */
    RequestId: string;
    /**
     * 用户自定义命名空间。
     */
    UserDefineRegionEntity: {
        /**
         * 所属地域。
         * @example `cn-beijing`
         */
        BelongRegion: string;
        /**
         * 命名空间名称。
         * @example `test_region`
         */
        RegionName: string;
        /**
         * 命名空间描述。
         * @example `逻辑Region`
         */
        Description: string;
        /**
         * 是否允许进行远程调试：
         * - true：允许。
         * - false：不允许。
         * @example `false`
         */
        DebugEnable: boolean;
        /**
         * 用户主账号ID。
         * @example `edas_****_test@aliyun-****.com`
         */
        UserId: string;
        /**
         * 参数为空或ID为0时表示创建命名空间，其他情况表示编辑。
         * @example `15160`
         */
        Id: number;
        /**
         * 命名空间ID：
         * - 自定义命名空间ID格式为：`地域ID:命名空间标示符`，例如：cn-beijing:tdy218。
         * - 默认命名空间ID格式为：`地域ID`，例如：cn-beijing。
         * @example `cn-beijing:test`
         */
        RegionId: string;
    };
}
