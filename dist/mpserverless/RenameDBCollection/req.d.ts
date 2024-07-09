export interface RenameDBCollectionRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9*****`
     */
    "SpaceId": string;
    /**
     * 原集合名称，需要指定存在的集合名称。
     * @example `coll1`
     */
    "OriginCollection": string;
    /**
     * 新集合名称，新集合名称不能和现有集合名称相同。
     * @example `newColl1`
     */
    "NewCollection": string;
}
