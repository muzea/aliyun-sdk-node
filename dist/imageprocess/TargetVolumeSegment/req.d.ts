export interface TargetVolumeSegmentRequest {
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
     * 癌症类型。包括Eso、Lung和Breast等，当前只支持Lung。
     * - Eso：食管癌
     * - Lung：肺癌
     * - Breast：乳腺癌
     * @example `LUNG`
     */
    "CancerType": string;
    /**
     * 目标体积类型。包括GTV、CTV和PTV，当前只支持GTV。
     * - GTV：肿瘤区（Gross Tumor Volume）
     * - CTV：临床靶区（Clinical Target Volume）
     * - PTV：计划靶区（Planning Target Volume）
     * @example `GTV`
     */
    "TargetVolumeType": string;
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
