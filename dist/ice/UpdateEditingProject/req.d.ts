export interface UpdateEditingProjectRequest {
    /**
     * 云剪辑工程标题
     * @example `testtimeline`
     */
    "Title"?: string;
    /**
     * 云剪辑工程描述
     * @example `testtimeline001desciption`
     */
    "Description"?: string;
    /**
     * 云剪辑工程时间线，Json格式
     */
    "Timeline"?: string;
    /**
     * 模板Id，用于快速低门槛的构建时间线。注：ProjectId、Timeline、TemplateId有且只有一个非空。当TemplateId不为空时，ClipsParam不能为空。
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId"?: string;
    /**
     * 模板对应的素材参数，Json格式，当TemplateId不为空时，ClipsParam不能为空。具体格式见 [普通模板创建及使用](~~328557~~)、[高级模板创建及使用](~~291418~~)。
     * @example `见模板使用文档`
     */
    "ClipsParam"?: string;
    /**
     * 云剪辑工程封面
     * @example `https://****.com/6AB4D0E1E1C7446888****.png`
     */
    "CoverURL"?: string;
    /**
     * 云剪辑工程ID
     * @example `****4ee4b97e27b525142a6b2****`
     */
    "ProjectId": string;
    /**
     * 工程业务状态，一般剪辑工程可忽略。支持修改工程的预约状态：
     * - Reserving: 预约中
     * - ReservationCanceled: 预约取消
     * @example `Reserving`
     */
    "BusinessStatus"?: string;
}
