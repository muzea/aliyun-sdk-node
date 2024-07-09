export interface ListDictsRequest {
    /**
     * 词典类型，支持：
     * - IK：IK冷更新词典。
     * - IK_HOT：IK热更新词典。
     * - SYNONYMS：同义词。
     * - ALIWS：阿里词典。
     * @example `IK`
     */
    "analyzerType": string;
    /**
     * 筛选指定的文件名称。
     * @example `SYSTEM_MAIN.dic`
     */
    "name"?: string;
    /**
     * 实例ID。
     * @example `es-cn-0ju29ifnc0005****`
     */
    "InstanceId": string;
}
