export interface ListObjectsRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 对Object名字进行分组的字符。所有Object名字包含指定的前缀，第一次出现delimiter字符之间的Object作为一组元素（即CommonPrefixes）。
     * @example `/`
     */
    "delimiter"?: string;
    /**
     * 设定从marker之后按字母排序开始返回Object。
     * <br>marker用来实现分页显示效果，参数的长度必须小于1024字节。
     * <br>做条件查询时，即使marker在列表中不存在，也会从符合marker字母排序的下一个开始打印。
     * @example `test1.txt`
     */
    "marker"?: string;
    /**
     * 指定返回Object的最大数。 如果因为max-keys的设定无法一次完成列举，返回结果会附加NextMarker元素作为下一次列举的marker。<br>取值：大于0小于1000 <br>默认值：100
     * @example `100`
     */
    "max-keys"?: number;
    /**
     * 限定返回文件的Key必须以prefix作为前缀。
     * - prefix参数的长度必须小于1024字节。
     * - 使用prefix查询时，返回的Key中仍会包含prefix。
     * 如果把prefix设为某个文件夹名，则列举以此Prefix开头的文件，即该文件夹下递归的所有文件和子文件夹。<br>
     * 在设置prefix的基础上，将delimiter设置为正斜线（/）时，返回值中只列举该文件夹下的文件，文件夹下的子文件夹名返回在CommonPrefixes中，子文件夹下递归的所有文件和文件夹不显示。<br>
     * 例如，一个Bucket中有三个Object ，分别为fun/test.jpg、 fun/movie/001.avi和fun/movie/007.avi。如果设定prefix为fun/，则返回三个Object；如果在prefix设置为fun/的基础上，将delimiter设置为正斜线（/），则返回fun/test.jpg和fun/movie/。
     * @example `fun`
     */
    "prefix"?: string;
    /**
     * 对返回的内容进行编码并指定编码的类型。
     * > delimiter、marker、prefix、NextMarker以及Key使用UTF-8字符。如果delimiter、marker、prefix、NextMarker以及Key中包含XML 1.0标准不支持的控制字符，您可以通过指定encoding-type对返回结果中的Delimiter、Marker、Prefix、NextMarker以及Key进行编码。
     */
    "encoding-type"?: any;
}
