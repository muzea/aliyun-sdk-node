export interface UpdateDomainToDomainGroupRequest {
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文；
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * base64编码的**xls**、**xlsx**文件，域名来源为文件时该字段为必须。文件中每行一个域名，单次上传最大支持文件大小为**2M**。
     * @example `dGVzdA==`
     */
    "FileToUpload"?: string;
    /**
     * 分组编号，可通过[QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html) 接口查询。
     * @example `1234`
     */
    "DomainGroupId": number;
    /**
     * 是否替换当前分组中域名。取值：
     * - **false**：向分组中新增域名；
     * - **true**：替换分组中原有域名。
     * @example `false`
     */
    "Replace": boolean;
    /**
     * 域名数据来源。取值：
     * - **1**：自定义输入域名；
     * - **2**：文件上传。
     * @example `1`
     */
    "DataSource": number;
    /**
     * 自定义输入的域名，域名来源为自定义输入时，该字段为必须。
     * @example `example.com`
     */
    "DomainName"?: string[];
}
