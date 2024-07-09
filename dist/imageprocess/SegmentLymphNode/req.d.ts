export interface SegmentLymphNodeRequest {
    /**
     * 图像URL列表。
     */
    "URLList": {
        /**
         * DICOM序列文件URL列表或NIFTI文件URL列表\["url","url",...]。
         * 推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * > URLList.N.URL中的N为该图像URL在当前List中的顺序（从1开始）。当直接使用API请求时，输入URLList的填充会以URLList.1.URL=url1，URLList.2.URL=url2，......的方式指定参数和参数值，参数对以&连接，其中url1、url2、......等具体值请根据实际情况进行替换；当使用SDK填充URLList时，可直接使用SDK提供的相应的方法。
         * @example `https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/xxx/0001.dcm`
         */
        URL: string;
    }[];
    /**
     * 图片的格式。支持DICOM或NIFTI。
     * @example `DICOM`
     */
    "DataFormat": string;
    /**
     * 期望输出的危及器官所在的身体部位。当前版本只支持CHEST。
     * - CHEST：胸部
     * - HEAD：头颅
     * @example `CHEST`
     */
    "BodyPart": string;
    /**
     * 当前渠道（即主账号）下的子渠道（即机构，如医院）标识。
     * @example `1`
     */
    "OrgId": string;
    /**
     * 当前渠道（即主账号）下的子渠道（即机构，如医院）名称。
     * @example `1`
     */
    "OrgName": string;
}
