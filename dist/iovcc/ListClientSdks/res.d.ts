export interface ListClientSdksResponse {
    /**
     * 客户端SDK信息。
     */
    ClientSdks: {
        /**
         * 系统类型，1-Android。
         * @example `1`
         */
        OsType: number;
        /**
         * 创建时间。
         * @example `1512976910000`
         */
        GmtCreate: number;
        /**
         * 修改时间。
         * @example `1512976910000`
         */
        GmtModified: number;
        /**
         * SDK名称。
         * @example `AiCCSDK-FOTA`
         */
        Name: string;
        /**
         * 包名，SDK该字段为空。
         * @example `null`
         */
        PkgName: string;
        /**
         * 包类型，0表示sdk, 1表示app。
         * @example `0`
         */
        PkgType: number;
        /**
         * 主键ID。
         * @example `6`
         */
        Id: number;
    }[];
    /**
     * 请求ID。
     * @example `D1BE8AC4-BE5B-4B04-B78B-A64C6BDB2AC2`
     */
    RequestId: string;
}
