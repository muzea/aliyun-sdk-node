export interface CreateCustomEntityRequest {
    /**
     * 自定义类型，取值：
     * - landmark：自定义地标。
     * - object：自定义物体。
     * @example `landmark`
     */
    "Algorithm": string;
    /**
     * 自定义库ID。
     * @example `1`
     */
    "CustomGroupId": string;
    /**
     * 自定义库实体名称，最长支持64字节。
     * @example `自定义库实体名称`
     */
    "CustomEntityName": string;
    /**
     * 自定义实体的额外信息，JSON String类型，最长支持256字节。
     * @example `{ "finegrainName":"examplName" }`
     */
    "CustomEntityInfo"?: string;
}
