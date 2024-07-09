export interface GenerateUploadConfigRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 文件名称
     * @example `test.docx`
     */
    "FileName"?: string;
    /**
     * 父目录 (materialDocument: 素材库, intervenes: 干预上传, temp: 临时上传目录, imageGenerate: 图像生成, datasetUpload: 数据集上传)
     * @example `datasetUpload`
     */
    "ParentDir": string;
}
