export interface AddLogPathRequest {
    /**
     * 应用ID，可通过调用ListApplication接口获取，详情请参见[ListApplication](~~149390~~)。
     * @example `3616cdca-4f92-4413**********`
     */
    "AppId": string;
    /**
     * 待收藏的应用日志的绝对路径。应用日志路径必须以`/`开头和结尾，并且路径中必须包含`/log`或者`/logs`。EDAS默认目录如下：
     * - /home/admin/edas-container/logs/
     * - /home/admin/taobao-tomcat-7.0.59/logs/
     * - /home/admin/taobao-tomcat-production-7.0.59.3/logs/
     * - /home/admin/taobao-tomcat-production-7.0.70/logs/
     * - /home/admin/edas-agent/logs/
     * @example `/temp/log/`
     */
    "Path": string;
}
