export interface CreateFileResponse {
    /**
     * 父目录id
     * @example `fileid5`
     */
    parent_file_id: string;
    /**
     * 分段信息列表
     */
    part_info_list: any[];
    /**
     * 上传id
     * @example `uploadid1`
     */
    upload_id: string;
    /**
     * 是否已经秒传
     * @example `true`
     */
    rapid_upload: boolean;
    /**
     * 文件类型
     * @example `file`
     */
    type: string;
    /**
     * 文件id
     * @example `fileid1`
     */
    file_id: string;
    /**
     * 域id
     * @example `bj1`
     */
    domain_id: string;
    /**
     * 空间id
     * @example `1`
     */
    drive_id: string;
    /**
     * 文件名
     * @example `a.txt`
     */
    file_name: string;
    /**
     * 文件状态
     * @example `uploading`
     */
    status: string;
    /**
     * 文件是否存在
     * @example `false`
     */
    exist: boolean;
}
