export interface DeletePlayInfoRequest {
    /**
     * 媒资ID。
     * @example `1d3518e0027d71ed80cd909598416303`
     */
    "MediaId"?: string;
    /**
     * 待删除的播放流文件URL，多个URL用英文逗号（,）分隔。
     * @example `https://ice-test001.oss-cn-shanghai.aliyuncs.com/%E6%8E%A5%E5%8F%A3%E6%B5%8B%E8%AF%95/%E5%B0%8F%E7%8C%AA%E4%BD%A9%E5%A5%87640*360.mp4`
     */
    "FileURLs"?: string;
    /**
     * 是否删除媒体流的物理文件。
     * 若媒资的存储地址是用户自有oss，需对服务角色AliyunICEDefaultRole提前进行授权，具体操作请参见[OSS授权管理](https://help.aliyun.com/document_detail/449331.html#p-ko2-wc7-iad)。
     * 仅支持删除转码流的物理文件，删除源文件的物理文件暂不支持。
     * @example `false`
     */
    "DeletePhysicalFiles"?: boolean;
}
