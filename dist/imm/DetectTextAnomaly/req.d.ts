export interface DetectTextAnomalyRequest {
    /**
     * 项目名称，获取方式请参见[创建项目](~~478153~~)。
     * @example `immtest`
     */
    "ProjectName": string;
    /**
     * 待检测文本，最长10,000个字符（包含标点），只支持检测中文文本。
     * @example `content`
     */
    "Content": string;
}
