export interface GetUploadUrlResponse {
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
     * 文件id
     * @example `5d5b846942cf94fa72324c14a4bda34e81da635d`
     */
    file_id: string;
    /**
     * 上传id
     * @example `10166D06127B413BA1EC8ABB1144D111`
     */
    upload_id: string;
    /**
     * 创建时间
     * @example `2019-09-11T16:34:36.977Z`
     */
    create_at: string;
    /**
     * 分段信息列表
     */
    part_info_list: any[];
}
