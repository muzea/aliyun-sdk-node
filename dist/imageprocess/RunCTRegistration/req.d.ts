export interface RunCTRegistrationRequest {
    /**
     * DICOM。
     * @example `DICOM`
     */
    "DataFormat": string;
    /**
     * 数据来源机构名称。
     * @example `测试组织`
     */
    "OrgName": string;
    /**
     * 数据来源机构代码。
     * @example `7ff51bfe-e73d-11ea-827d-506b4b3f3cf6`
     */
    "OrgId": string;
    /**
     * 输入数据的类型，仅支持`HTTP_FILES`。
     * @example `HTTP_FILES`
     */
    "DataSourceType": string;
    "ReferenceList": {
        /**
         * 参考图像URL地址列表。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * >至少8帧，至多600帧。
         * @example `https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/registration/ref/33_P18.4.1.dcm`
         */
        ReferenceURL: string;
    }[];
    "FloatingList": {
        /**
         * 待配准图像URL地址列表。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * >至少8帧，至多600帧。
         * @example `https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/registration/flt/34_P18.4.1.dcm`
         */
        FloatingURL: string;
    }[];
}
