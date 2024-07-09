export interface CreateUdfFileRequest {
    /**
     * 函数文件所在的文件夹路径。
     * @example `业务流程/第一个业务流程/函数/字符串处理`
     */
    "FileFolderPath"?: string;
    /**
     * DataWorks工作空间的ID，您可以单击页面右上角的小扳手图标，进入工作空间管理页面查看。
     * @example `10000`
     */
    "ProjectId"?: number;
    /**
     * 函数的名称。
     * @example `StringConcat`
     */
    "FileName": string;
    /**
     * 函数的分类，对应创建函数表单中的函数类型一项，包括MATH（数学运算函数）、AGGREGATE（聚合函数）、STRING（字符串处理函数）、DATE（日期处理函数）、ANALYTIC（窗口函数）和OTHER（其他函数）。
     * @example `STRING`
     */
    "FunctionType": string;
    /**
     * 函数定义所在的类名，对应创建函数表单的类名一项。
     * @example `com.alibaba.DataWorks.api.udf.StringConcat`
     */
    "ClassName": string;
    /**
     * 函数引用的资源名列表，对应创建表中的资源列表。多个资源名称之间使用英文逗号（,）分隔。
     * @example `string-concat-1.0.0.jar,commons-lang-2.6.jar`
     */
    "Resources": string;
    /**
     * 函数用途的说明，对应创建函数表单中的描述。
     * @example `把几个字符串连接起来生成一个新的字符串`
     */
    "UdfDescription"?: string;
    /**
     * 函数调用的命令格式，对应创建函数表单中的命令格式。
     * @example `StringConcat(String... substrs)`
     */
    "CmdDescription"?: string;
    /**
     * 函数入参的说明，对应创建函数表单中的参数说明。
     * @example `需要连接的字符串列表`
     */
    "ParameterDescription"?: string;
    /**
     * 函数的返回值说明，对应创建函数表单中的返回值。
     * @example `所有字符串按照输入顺序前后连接生成的新字符串`
     */
    "ReturnValue"?: string;
    /**
     * 函数调用示例，对应创建函数表单中的示例。
     * @example `StringConcat('a', 'b', 'c')`
     */
    "Example"?: string;
    /**
     * DataWorks工作空间的唯一标识符，即数据开发页面顶部切换工作空间处的英文标识。
     * @example `dw_project`
     */
    "ProjectIdentifier"?: string;
    /**
     * 当参数中指定的目录（FileFolderPath）在系统中不存在时，是否自动创建此目录。取值如下：
     * true：若此目录不存在，自动创建此目录
     * false：若此目录不存在，调用失败
     * @example `false`
     */
    "CreateFolderIfNotExists"?: boolean;
}
