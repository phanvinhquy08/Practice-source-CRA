import { schema, normalize } from 'normalizr';
const data = {
  "data": [
      {
          "id": 1777,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1787,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1786,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1785,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1784,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1783,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1782,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1781,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1780,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1779,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1778,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1867,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": true,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1776,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1775,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1774,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1773,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1772,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1771,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1770,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      },
      {
          "id": 1769,
          "user_id": 1434,
          "doctor_id": 14,
          "interview_id": 1324,
          "latest_responder_type": "user",
          "closed_at": "2021-01-15T16:41:02.000+09:00",
          "created_at": "2021-01-15T16:41:02.000+09:00",
          "updated_at": "2021-01-15T16:41:02.000+09:00",
          "first_interview_id": 1323,
          "reviewed": false,
          "relationships": [
              "user",
              "doctor",
              "interview",
              "prescription",
              "user_review"
          ],
          "doctor": {
              "id": 14,
              "firebase_uid": "fRwx6XcB8Q49xNWMug5kUjUuOYMTsH6w",
              "email": "doctor1@example.com",
              "email_verified_at": "2019-07-27T23:31:27.000+09:00",
              "created_at": "2019-07-27T23:31:28.000+09:00",
              "updated_at": "2021-01-25T18:58:08.000+09:00",
              "deleted_at": null,
              "last_activity_at": "2021-01-25T18:58:08.000+09:00",
              "identification_state": "identifing",
              "has_password": true,
              "has_unpaid_invoices": false,
              "on_subscribing": false,
              "working": true,
              "active_examinations_num": 138,
              "relationships": [
                  "profile",
                  "phone",
                  "devices",
                  "addresses",
                  "roles",
                  "user_campaign",
                  "clinic",
                  "diseases",
                  "holidays"
              ],
              "profile": {
                  "id": 14,
                  "family_name": "辻",
                  "given_name": "智生",
                  "family_name_kana": "つじ",
                  "given_name_kana": "ともお",
                  "gender": "female",
                  "birthday": "1994-02-21",
                  "age": 26,
                  "created_at": "2019-07-27T23:31:28.000+09:00",
                  "updated_at": "2019-07-27T23:31:28.000+09:00",
                  "image_url": null,
                  "relationships": []
              }
          },
          "interview": {
              "id": 1324,
              "user_id": 1434,
              "disease_id": 2,
              "doctor_id": 14,
              "first_time": false,
              "completed_at": "2020-08-04T09:57:21.000+09:00",
              "has_reserving_video_call": true,
              "created_at": "2020-08-04T09:55:39.000+09:00",
              "updated_at": "2021-01-18T16:05:22.000+09:00",
              "expires_at": "2020-08-04T21:55:39.000+09:00",
              "state": "submitted",
              "submittable": false,
              "is_expired": true,
              "relationships": [
                  "user",
                  "disease",
                  "doctor"
              ],
              "disease": {
                  "id": 2,
                  "name": "緊急避妊外来",
                  "relationships": [
                      "medicines"
                  ]
              }
          },
          "prescription": null
      }
  ],
  "meta": {
      "pagination": {
          "count": 101,
          "items": 20,
          "page": 1,
          "last": 6,
          "pages": 6,
          "offset": 0,
          "from": 1,
          "to": 20,
          "prev": null,
          "next": 2
      }
  }
}

const examination = new schema.Entity('examination');

const examinations = [examination];
export const examinationNormalize = normalize(data.data, examinations);