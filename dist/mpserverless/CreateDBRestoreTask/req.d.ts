export interface CreateDBRestoreTaskRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-b24c-5ac1a9a*****`
     */
    "SpaceId": string;
    /**
     * 备份文件ID。
     * @example `20201118114602_6bd7c996-f620-4026-ae24-418eddf78671`
     */
    "BackupId": string;
    /**
     * 待回档集合名称，多个集合用英文逗号分隔，例如`coll1,coll2`。
     * @example `coll1,coll2`
     */
    "OriginCollections": string;
    /**
     * 回档后的集合名称，不能和数据库中现有的文档名称相同，与originCollections一一对应，多个集合用英文逗号分隔，例如`newColl1,newColl2`。
     * @example `newColl1,newColl2`
     */
    "NewCollections": string;
}
