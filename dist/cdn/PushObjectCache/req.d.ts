export interface PushObjectCacheRequest {
    /**
     * 预热URL，格式为**加速域名/预热的文件**。
     * > 多个URL之间用换行符（\n）或（\r\n）分隔，ObjectPath的单条长度最长为1024个字符。
     * @example `example.com/image/1.png\nexample.org/image/2.png`
     */
    "ObjectPath": string;
    /**
     * 预热区域。取值：
     * - **domestic**：**仅中国内地**。
     * - **overseas**：**全球**（不包含中国内地）。
     * 如果不传该参数，默认的预热区域为您的域名所配置的CDN加速区域。具体如下：
     * - 域名的加速区域为“**仅中国内地**”，预热区域是仅中国内地。
     * - 域名的加速区域为“**全球**”，预热区域是全球。
     * - 域名的加速区域为“**全球**（不包含中国内地）”，预热区域是全球（不包含中国内地）。
     * @example `domestic`
     */
    "Area"?: string;
    /**
     * 是否直接预热到L2节点。取值：
     * - **true**：代表预热的节点层级必须包含L2节点。
     * - **false**：代表仅预热回源层节点（**false**为默认值，回源层节点可能是L2节点，也可能是L3节点）。
     * @example `true`
     */
    "L2Preload"?: boolean;
    /**
     * 预热请求默认携带的header是Accept-Encoding:gzip，如果您需要预热请求携带其他header，或者实现多副本预热，那么可以使用该参数来实现自定义预热header。用JSON串格式提交。
     * @example `{
          "Accept-Encoding": [
                "gzip, deflate, br"
          ]
    }`
     */
    "WithHeader"?: string;
}
