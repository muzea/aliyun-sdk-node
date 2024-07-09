export interface ListEnabledExtensionsForProjectResponse {
    /**
     * 请求唯一ID
     * @example `4F2CA7ED-27E5-59EA-A8C4-F1F7A1FF0B22`
     */
    RequestId: string;
    /**
     * 扩展程序详情
     */
    Extensions: {
        /**
         * 扩展程序唯一编码。
         * @example `a94a8e23bc0b4dfab9a5e4d2f374d645`
         */
        ExtensionCode: string;
        /**
         * 扩展程序名称
         * @example `不允许使用max_pt函数`
         */
        ExtensionName: string;
        /**
         * 租户ID。
         * @example `529889518659842`
         */
        TenantId: number;
        /**
         * 创建人
         * @example `3444434343555`
         */
        CreateUser: string;
        /**
         * 修改人
         * @example `34452335611988`
         */
        ModifyUser: string;
        /**
         * 扩展程序描述
         * @example `ODPS SQL兼容Spark引擎检测`
         */
        ExtensionDesc: string;
        /**
         * 责任人ID。
         * @example `21323672*******55500`
         */
        Owner: string;
        /**
         * 参数配置，参考[扩展程序参数配置](~~405354~~)。
         * @example `extension.fileType.23.deploy-file.enabled=true`
         */
        ParameterSetting: string;
    }[];
}
