export interface ListAllPublicMediaTagsRequest {
    /**
     * 媒资业务类型
     * @example `"sticker"`
     */
    "BusinessType"?: string;
    /**
     * 实体ID，用于区分不同种类的公共版权媒资。取值：
     * \- Copyright_Music: 公共版权音乐
     * @example `Copyright_Music`
     */
    "EntityId"?: string;
}
