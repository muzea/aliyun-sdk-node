export interface PutProjectPolicyRequest {
    /**
     * 请求参数，即授权策略。
     * @example `{ 	"Version": "1", 	"Statement": [{ 		"Action": ["log:PostLogStoreLogs"], 		"Resource": "acs:log:*:*:project/exampleproject/*", 		"Effect": "Deny", 		"Condition": { 			"StringNotLike": { 				"acs:SourceVpc": ["vpc-*"] 			} 		} 	}] }`
     */
    "body"?: string;
    "project"?: string;
}
