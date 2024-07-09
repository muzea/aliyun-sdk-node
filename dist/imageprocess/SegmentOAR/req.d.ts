export interface SegmentOARRequest {
    /**
     * 图像URL地址列表。
     */
    "URLList": {
        /**
         * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * > URLList.N.URL中的N为该图像URL在当前List中的顺序（从1开始）。当直接使用API请求时，输入URLList的填充会以URLList.1.URL=url1，URLList.2.URL=url2，......的方式指定参数和参数值，参数对以&连接，其中url1、url2、......等具体值请根据实际情况进行替换；当使用SDK填充URLList时，可直接使用SDK提供的相应的方法。
         * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/xxx/c001.dcm`
         */
        URL: string;
    }[];
    /**
     * 图像的格式。目前只支持以下两种：DICOM、NIFTI。
     * @example `NIFTI`
     */
    "DataFormat": string;
    /**
     * 数据来源机构代码。
     * @example `7ff51bfe-e73d-11ea-827d-506b4b3f3cf6`
     */
    "OrgId": string;
    /**
     * 数据来源机构名称。
     * @example `测试组织`
     */
    "OrgName": string;
    /**
     * 是否增强CT。
     * - true：增强CT
     * - false：平扫CT
     * @example `true`
     */
    "Contrast"?: boolean;
    /**
     * 长整形数组，对应的器官输出。
     */
    "MaskList"?: number[];
    /**
     * 期望输出的危及器官所在的身体部位。
     * - **CHEST**：胸部
     * - **HEAD&NECK**：头颈部。
     * - 空字段：算法自动检测。
     * @example `CHEST`
     */
    "BodyPart"?: string;
}
