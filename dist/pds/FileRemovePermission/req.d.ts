export interface FileRemovePermissionRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body": {
        /**
         * 空间id
         * @example `1`
         */
        drive_id: string;
        /**
         * 文件id
         * @example `4221bf6e6ab43c255edc4463bf3a6f5f5d317406`
         */
        file_id: string;
        /**
         * 共享的用户对象集合
         */
        member_list: {
            /**
             * 可授权对象，表示一个用户或者一个群组
             */
            identity: any;
            /**
             * 目前支持两种方式设置权限，一种是通过指定角色设置权限，另一种是自定义操作权限，此字段用于指定角色设置权限，与action\_list互斥，当两个字段同时设置时，以此字段为准
             * 目前支持：
             * SystemFileOwner（文件协同）
             * SystemFileDownloader（下载者）
             * SystemFileEditor（编辑者）
             * SystemFileEditorWithoutDelete（无删除编辑者）
             * SystemFileEditorWithoutShareLink（无分享编辑者）
             * SystemFileMetaViewer（可见列表）
             * SystemFileUploader（上传者）、SystemFileUploaderAndDownloader（上传/下载者）
             * SystemFileDownloaderWithShareLink（下载/分享者）
             * SystemFileUploaderAndDownloaderWithShareLink（上传/下载/分享者）
             * SystemFileUploaderAndViewer（预览/上传者）
             * SystemFileUploaderWithShareLink（上传/分享者）
             * SystemFileViewer（预览者）
             * @example `SystemFileDownloader`
             */
            role_id: string;
        }[];
    };
}
