export interface GetMigrationSummaryResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `19999A96-71BA-1845-B455-ED620EF4E37F`
     */
    RequestId: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。您可以通过请求ID定位问题。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求返回的导入导出任务详情。
     */
    Data: {
        /**
         * 任务的ID。
         * @example `1234`
         */
        MigrationId: number;
        /**
         * 任务的名称。
         * @example `test_export_01`
         */
        Name: string;
        /**
         * 任务的创建时间。
         * @example `1589904000000`
         */
        GmtCreate: number;
        /**
         * 任务的修改时间。
         * @example `1589904000000`
         */
        GmtModified: number;
        /**
         * 任务创建人的用户ID。
         * @example `982293332403****`
         */
        CreateUser: string;
        /**
         * 任务操作人的用户ID。
         * @example `982293332403****`
         */
        OpUser: string;
        /**
         * 导入导出任务的执行状态。取值如下：
         * - INIT：任务为初始状态。
         * - EDITING：任务在编辑中。
         * - IMPORTING：任务在导入中。
         * - IMPORT_ERROR：任务导入失败。
         * - IMPORT_SUCCESS：任务导入成功。
         * - EXPORTING：任务在导出中。
         * - EXPORT_ERROR：任务导出失败。
         * - EXPORT_SUCCESS：任务导出成功。
         * - REVOKED：任务被取消。
         * - PARTIAL_SUCCESS：仅部分任务导入或导出成功。
         * @example `EXPORT_SUCCESS`
         */
        Status: string;
        /**
         * 任务所在DataWorks空间的ID。
         * @example `12345`
         */
        ProjectId: number;
        /**
         * 导出任务包的下载链接。您可以通过该链接下载导出任务。
         * @example `https://shanghai-xxx-oss.oss-cn-shanghai.aliyuncs.com/pre/store/f10_bf47_b4fa7df0860f.zip?Expires=1639540903&OSSAccessKeyId=XXXXXXeF4Lv5j&Signature=qxxxxx`
         */
        DownloadUrl: string;
    };
}
