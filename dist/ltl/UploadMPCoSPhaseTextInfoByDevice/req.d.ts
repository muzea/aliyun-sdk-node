export interface UploadMPCoSPhaseTextInfoByDeviceRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 业务链标识。
     * @example `489973087549****`
     */
    "BizChainId": string;
    /**
     * 协同模型标识。
     * @example `987823074334****`
     */
    "PhaseGroupId": string;
    /**
     * 阶段标识。
     * @example `644208887511****`
     */
    "PhaseId": string;
    /**
     * 数据唯一标识。
     * @example `32bfce96b4e2f9bec0f2ea5cc2f14ace1486cc146d5832d3a84e5332fe89****`
     */
    "DataKey": string;
    /**
     * 数据序列号。
     * @example `be350cd52b0f47846f93df7d0d4febd86025ee6c028a6b22a6ff1ac6d3a2****`
     */
    "DataSeq"?: string;
    /**
     * 阶段数据。长度要求1~4096字节，一个中文字符占两位字符。
     * @example `某公司某业务数据。`
     */
    "PhaseData": string;
    /**
     * 关联数据列表。详情请参见下表RelatedData。
     * @example `[{"relatedPhaseId":"987823074334****","relatedDataKey":"be350cd52b0f47846f93df7d0d4febd86025ee6c028a6b22a6ff1ac6d3a2****","relatedPhaseData":"某公司某业务数据。","relatedDataSeq":"b71cca5502d8d7d0057a5ebf44d78ae75280436b86dcbda643c4d264ff2a****"}]`
     */
    "RelatedDataList"?: any;
    /**
     * IoT认证方式。
     * **ID2**：阿里云Link ID²。
     * @example `ID2`
     */
    "IotAuthType": string;
    /**
     * IoT设备唯一标识。
     * @example `183329761572****`
     */
    "IotId": string;
    /**
     * IoT设备服务提供方。
     * - **1**：开放平台。
     * - **2**：物联网平台。
     * @example `2`
     */
    "IotIdSource": string;
    /**
     * IoT设备服务提供方标识。
     * @example `94894989498FDDABD51698BD1A49BF1AFB0AA94FAA8DB65A689164BEED******`
     */
    "IotIdServiceProvider": string;
    /**
     * IoT可信数据Value摘要：
     * 1：Value数据UTF-8编码。
     * 2：SHA256运算，结果为32字节数据转换为64字节字符串格式（大写字符）。
     * @example `94894989498FDDABD51698BD1A49BF1AFB0AA94FAA8DB65A689164BEED******`
     */
    "IotDataDigest": string;
    /**
     * IoT设备数据签名。
     * 使用IoT设备安全SDK进行签名。
     * @example `2~2~192ADFB498AA****~1579198300000~J8E891NAgAhwHBHm8******​/hnswr698HSb09ahS8709bn9s03jg98u4jg******`
     */
    "IotSignature": string;
}
