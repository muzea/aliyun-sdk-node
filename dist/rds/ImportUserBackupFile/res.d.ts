export interface ImportUserBackupFileResponse {
    /**
     * 导入用户备份是否成功。是则返回**true**，否则返回错误信息。
     * @example `true`
     */
    Status: boolean;
    /**
     * 请求ID。
     * @example `A140DD14-DCC9-4548-9C72-52A49A58A310`
     */
    RequestId: string;
    /**
     * 用户备份ID。
     * @example `b-n8tpg24c6i0v****`
     */
    BackupId: string;
}
