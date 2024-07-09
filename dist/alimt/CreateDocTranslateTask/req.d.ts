export interface CreateDocTranslateTaskRequest {
    /**
     * 原文语言，[语言code参考](https://help.aliyun.com/document_detail/158269.html?spm=a2c4g.11186623.6.542.7da22b9fayuNoj)
     * @example `en`
     */
    "SourceLanguage": string;
    /**
     * 目标语言，[语言code参考](https://help.aliyun.com/document_detail/158269.html?spm=a2c4g.11186623.6.542.7da22b9fayuNoj)
     * @example `zh`
     */
    "TargetLanguage": string;
    /**
     * 文档URL。
     * @example `http://fileUrl`
     */
    "FileUrl": string;
    /**
     * 场景，支持：通用（general）、商品标题（title）、商品详情（description）、买卖家沟通（message）、医疗（medical）、社交（social）、科技（tech）。
     * @example `general`
     */
    "Scene"?: string;
    /**
     * 翻译结果回调URL，服务器会向回调地址发起post请求
     * 请求body
     * raw json
     * - 参数名  说明
     * - task_id  任务id
     * - status     状态
     * - errCode   错误码
     * - errMsg    错误信息
     * - translateFileUrl   文件下载地址，过期时间1小时
     * IP白名单
     * 59.82.61.52
     * 203.119.241.30
     * 203.119.241.98
     * 59.82.84.90
     * 203.119.241.56
     * 59.82.61.75
     * 回调服务示例：该服务用于回调方式获取翻译结果
     * ```
     * import com.alibaba.fastjson.JSON;
     * import com.alibaba.fastjson.JSONObject;
     * import org.springframework.web.bind.annotation.RequestBody;
     * import org.springframework.web.bind.annotation.RequestMapping;
     * import org.springframework.web.bind.annotation.RequestMethod;
     * import org.springframework.web.bind.annotation.RestController;
     * @RestController
     * public class CallbackController {
     *     @RequestMapping(value = "callback", method = RequestMethod.POST)
     *     public void callback(@RequestBody String body) {
     *         try {
     *             JSONObject result = JSON.parseObject(body);
     *             if (200 != result.getInteger("errCode")) {
     *                 System.out.println("fail " + result.getString("erMsg"));
     *                 return;
     *             }
     *             System.out.println("task_id:" + result.getString("task_id"));
     *             System.out.println("status:" + result.getString("status"));
     *             System.out.println("translateFileUrl:" + result.getString("translateFileUrl"));
     *         } catch (Exception e) {
     *             e.printStackTrace();
     *         }
     *     }
     * }
     * ```
     * @example `http://callbackUrl`
     */
    "CallbackUrl"?: string;
    /**
     * 提供幂等能力，3分钟内，相同的值只会生效一次。
     * @example `token`
     */
    "ClientToken"?: string;
}
