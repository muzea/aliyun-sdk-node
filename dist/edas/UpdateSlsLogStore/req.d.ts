export interface UpdateSlsLogStoreRequest {
    /**
     * 应用ID，可通过调用ListApplication接口获取，详情请参见[ListApplication](~~149390~~)。
     * @example `af58edcf-f7eb-****-****-db4e425f****`
     */
    "AppId": string;
    /**
     * Logstore配置：
     * - **Configs**：
     *     - **type**：采集类型，文件类型为file，标准输出类型为stdout。
     *     - **Logstore**：Logstore名称。请确保Logstore名称在同一个集群中不重复，其命名应符合规则：
     *         - 日志库名称仅支持小写字母、数字、短划线（-）和下划线（_）。
     *         -  必须以小写字母和数字开头和结尾。
     *         -  名称长度为3~63个字符。
     *
     *         > 若为空，则由系统自动生成。
     *
     *     - **LogDir**：若为标准输出类型，则采集路径为stdout.log，若为文件类型，则为采集的文件路径，支持通配符，采集路径应符合正则：`^/(.+)/(.*)[^/]$`。
     * @example `[{"logstore":"thisisanotherfilelog","type":"file","logDir":"/var/log/*"},{"logstore":"","type":"stdout","logDir":"stdout.log"},{"logstore":"thisisafilelog","type":"file","logDir":"/tmp/log/*"}]`
     */
    "Configs": string;
}
