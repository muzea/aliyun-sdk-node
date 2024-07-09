export interface GenerateFileUploadURLRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 文件扩展名。可选：**bin**、**apk**、**tar**、**gz**、**tar.gz**、**zip**、**gzip**。
     * @example `bin`
     */
    "FileSuffix": string;
    /**
     * 文件所属的业务场景编码。
     * 设备任务文件使用**DEVICE_JOB_FILE**。
     * @example `DEVICE_JOB_FILE`
     */
    "BizCode": string;
    /**
     * 文件名称。名称不可包含短划线（-）、英文句号（.）、星号（*）、正斜线（/）、井号（#）、百分号（%）、and（&）、at（@）、反斜线（\），长度不可超过64个字符。
     * 如果不传入该参数，系统将为文件自动生成随机字符串作为文件名称。
     * @example `file1`
     */
    "FileName"?: string;
}
