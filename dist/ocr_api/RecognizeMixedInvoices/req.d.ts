export interface RecognizeMixedInvoicesRequest {
    /**
     * * 本字段和body字段二选一，不可同时透传或同时为空。
     * * 图片链接（长度不超2048，不支持base64）。
     * @example `https://img.alicdn.com/tfs/TB1.bnGbRWD3KVjSZFsXXcqkpXa-1654-2341.jpg`
     */
    "Url"?: string;
    /**
     * * 本字段和URL字段二选一，不可同时透传或同时为空。
     * * 图片二进制文件，最大10MB。
     * * 使用HTTP方式调用，把图片二进制文件放到HTTP body中上传即可。
     * * 使用SDK的方式调用，把图片放到SDK的body中即可。
     * @example `图片二进制文件`
     */
    "body"?: string;
    /**
     * * 待识别的PDF/OFD页码。
     * * 如果字段为空，或大于PDF/OFD总页数，则识别第一页。
     * * 使用SDK设置此字段，请更新SDK版本。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * * 是否合并PDF的**前几页**，并返回合并页的识别结果（最大支持返回**前4页**识别结果）。例如上传的PDF有**3页**，且设置此参数为**true**，返回前**3页**所有识别结果。
     * * 默认为**false**。
     * * 如果上传的PDF总页数大于**4页**，且设置此参数为**true**，则只识别**前4页**（此参数不支持选择任意页码号）。
     * * 如果设置了 **PageNo**，同时 **MergePdfPages** 设置为**true**，则 **MergePdfPages** 不生效，会识别 **PageNo** 指定的PDF页面。
     * @example `false`
     */
    "MergePdfPages"?: boolean;
}
