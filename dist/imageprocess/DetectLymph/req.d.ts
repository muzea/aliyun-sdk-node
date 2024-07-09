export interface DetectLymphRequest {
    /**
     * 图像URL列表。
     */
    "URLList": {
        /**
         * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
         * > URLList.N.URL中的N为该图像URL在当前List中的顺序（从1开始）。当直接使用API请求时，输入URLList的填充会以URLList.1.URL=url1，URLList.2.URL=url2，......的方式指定参数和参数值，参数对以&连接，其中url1、url2、......等具体值请根据实际情况进行替换；当使用SDK填充URLList时，可直接使用SDK提供的相应的方法。
         * @example `https://medclients-sh.oss-cn-shanghai.aliyuncs.com/demo/xxx/0001.dcm`
         */
        URL: string;
    }[];
    /**
     * 输入数据的类型，仅支持`HTTP_FILES`。
     * @example `HTTP_FILES`
     */
    "DataSourceType": string;
}
