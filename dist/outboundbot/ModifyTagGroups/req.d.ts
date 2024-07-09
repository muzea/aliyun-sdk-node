export interface ModifyTagGroupsRequest {
    /**
     * 实例id
     * @example `cd560e89-0459-4c8a-ad98-47d713e4abd6`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `365b955d-6f4d-4ab5-a6e1-9a301307f4b1`
     */
    "ScriptId": string;
    /**
     * 标签列表
     * @example `[{"Id":"19b23e92-4ee3-4129-8c2e-e1968670d887","ScriptId":"365b955d-6f4d-4ab5-a6e1-9a301307f4b1","TagGroup":"当前学历","TagName":"本科"},{"Id":"6ebb9fb9-cc51-4bae-b256-64d5ec4c75ef","ScriptId":"365b955d-6f4d-4ab5-a6e1-9a301307f4b1","TagGroup":"当前学历","TagName":"在职"},{"Id":"ce442140-299b-4971-b26b-a3e277d5c1de","ScriptId":"365b955d-6f4d-4ab5-a6e1-9a301307f4b1","TagGroup":"当前学历","TagName":"高中"},{"Id":"c8987ff8-4475-4a75-b994-e4f6411c6968","ScriptId":"365b955d-6f4d-4ab5-a6e1-9a301307f4b1","TagGroup":"当前学历","TagName":"研究生"}]`
     */
    "Tags": string;
    /**
     * 标签组列表
     * @example `[{"Id":"54629be9-0746-464a-ab59-4830242cf644","ScriptId":"365b955d-6f4d-4ab5-a6e1-9a301307f4b1","TagGroup":"当前学历","TagGroupIndex":0}]`
     */
    "TagGroups": string;
}
