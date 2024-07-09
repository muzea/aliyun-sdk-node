export interface DeleteFileRequest {
    /**
     * - 按照文件ID删除单个文件，文件唯一标识，例如： ef69b85f-****-4942-8a0f-211a82b48ec7
     * - 按照目录结构删除文件，传入目录前缀并以 "/" 结尾，当目录文件过多时请耐心等待，例如：images/
     * - 支持同时删除多个文件和多个目录，文件ID以及目录前缀使用半角逗号（,）分隔。最多同时删除50个项目，例如： ef69b85f-****-4942-8a0f-211a82b48ec7,images/,docs/
     * @example `c568f23d-a46f-4866-****-142e5eb3e174`
     */
    "Id": string;
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-****-b24c-5ac1a9a7bb9f`
     */
    "SpaceId": string;
}
