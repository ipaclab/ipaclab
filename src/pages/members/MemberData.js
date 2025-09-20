import EE_Lab_Logo from "../../pic/logo/EE_Lab_logo.jpg";
import EVSR_Lab_Logo from "../../pic/logo/EVSE_lab_logo.jpg";
import MoCAR_Lab_Logo from "../../pic/logo/MoCAR_lab_logo.png";
import DefaultMemberLogo from "../../pic/member/default-icon.jpg";
import SupervisorLogo from "../../pic/member/dr_hoang_duc_chinh.jpg";

export const sortedMemberData = (members, setAlumni, setActiveMember, setSupervisor) => {
  let result = {
    alumni: [],
    supervisor: [],
    member: [],
    smart_farm: [],
    agv: [],
    smart_biogas: [],
    ev_charging: [],
    inventory: [],
    target_tracking: [],
    collaborators: [],
  };

  let alumni_count = 0;
  let member_count = 0;
  let supervisor_count = 0;
  
  /* Categorize the members */
  members.forEach(member => {
    // Check position for Alumni
    if (member.position.toLowerCase() === 'alumni') {
      result.alumni.push(member);
      alumni_count++;
    }
    // Check position for Supervisor
    else if (member.position.toLowerCase() === 'supervisor') {
      result.supervisor.push(member);
      supervisor_count++;
    }
    else if (member.position.toLowerCase() === 'collaborators') {
      result.collaborators.push(member);
    }
    else {
      // result.member.push(member);
      member_count++;
      switch (member.research_topic.toLowerCase()) {
        case 'wireless sensor and actuator networks':
          result.smart_farm.push(member);
          break;
        case 'agv':
          result.agv.push(member);
          break;
        case 'smart biogas monitoring system':
          result.smart_biogas.push(member);
          break;
        case 'ev charging station management system':
          result.ev_charging.push(member);
          break;
        case 'smart inventory management system':
          result.inventory.push(member);
          break;
        case 'target tracking':
          result.target_tracking.push(member);
          break;
      }
    }
  });

  setAlumni(alumni_count);
  setActiveMember(member_count);
  setSupervisor(supervisor_count);
  
  return result;
}

export const Members = [
  /* Supervisor */
  {
    id: 1,
    name: 'Dr. Hoang Duc Chinh',
    course: 48,
    position: 'Supervisor',
    research_topic: 'Department of Automation',
    image: SupervisorLogo,
  },

  /* Wireless Sensor and Actuator Networks */
  {
    id: 2,
    name: 'Tran Quang Anh',
    course: 66,
    position: 'Member',
    research_topic: 'Wireless Sensor and Actuator Networks',
    image: DefaultMemberLogo,
  },
  {
    id: 3,
    name: 'Pham Huy Tuyen',
    course: 66,
    position: 'Member',
    research_topic: 'Wireless Sensor and Actuator Networks',
    image: DefaultMemberLogo,
  },
  {
    id: 4,
    name: 'Tran Phuong Du',
    course: 66,
    position: 'Member',
    research_topic: 'Wireless Sensor and Actuator Networks',
    image: DefaultMemberLogo,
  },
  {
    id: 5,
    name: 'Tran Son',
    course: 65,
    position: 'Member',
    research_topic: 'Wireless Sensor and Actuator Networks',
    image: DefaultMemberLogo,
  },
  {
    id: 6,
    name: 'Nguyen Thanh Dat',
    course: 67,
    position: 'Member',
    research_topic: 'Wireless Sensor and Actuator Networks',
    image: DefaultMemberLogo,
  },
  {
    id: 7,
    name: 'Tran Le Gia Bao',
    course: 67,
    position: 'Member',
    research_topic: 'Wireless Sensor and Actuator Networks',
    image: DefaultMemberLogo,
  },
  {
    id: 8,
    name: 'Dang The Manh',
    course: 67,
    position: 'Member',
    research_topic: 'Wireless Sensor and Actuator Networks',
    image: DefaultMemberLogo,
  },

  /* AGV */
  {
    id: 9,
    name: 'Kieu Viet Anh',
    course: 66,
    position: 'Member',
    research_topic: 'AGV',
    image: DefaultMemberLogo,
  },
  {
    id: 10,
    name: 'Dinh Hoang Son',
    course: 66,
    position: 'Member',
    research_topic: 'AGV',
    image: DefaultMemberLogo,
  },
  {
    id: 11,
    name: 'Do Duc Toan',
    course: 66,
    position: 'Member',
    research_topic: 'AGV',
    image: DefaultMemberLogo,
  },
  {
    id: 12,
    name: 'Pham Hoang Anh',
    course: 66,
    position: 'Member',
    research_topic: 'AGV',
    image: DefaultMemberLogo,
  },
  {
    id: 13,
    name: 'Nguyen Quoc Viet',
    course: 66,
    position: 'Member',
    research_topic: 'AGV',
    image: DefaultMemberLogo,
  },
  {
    id: 14,
    name: 'Nguyen Trong Nghia',
    course: 66,
    position: 'Member',
    research_topic: 'AGV',
    image: DefaultMemberLogo,
  },
  {
    id: 15,
    name: 'Nguyen Trung Hieu',
    course: 66,
    position: 'Member',
    research_topic: 'AGV',
    image: DefaultMemberLogo,
  },

  /* Biogas */
  {
    id: 16,
    name: 'Do Tien Dung',
    course: 65,
    position: 'Member',
    research_topic: 'Smart biogas monitoring system',
    image: DefaultMemberLogo,
  },
  {
    id: 17,
    name: 'Nguyen Huy Hoang',
    course: 65,
    position: 'Member',
    research_topic: 'Smart biogas monitoring system',
    image: DefaultMemberLogo,
  },
  {
    id: 18,
    name: 'Truong Van Truong Giang',
    course: 66,
    position: 'Member',
    research_topic: 'Smart biogas monitoring system',
    image: DefaultMemberLogo,
  },
  {
    id: 19,
    name: 'Hoang Anh Tuan',
    course: 66,
    position: 'Member',
    research_topic: 'Smart biogas monitoring system',
    image: DefaultMemberLogo,
  },

  /* EV Charging Station Management System */
  {
    id: 20,
    name: 'Nguyen Dang Minh',
    course: 67,
    position: 'Member',
    research_topic: 'EV Charging Station Management System',
    image: DefaultMemberLogo,
  },
  {
    id: 21,
    name: 'Dang Ngoc Lan',
    course: 67,
    position: 'Member',
    research_topic: 'EV Charging Station Management System',
    image: DefaultMemberLogo,
  },
  {
    id: 22,
    name: 'Nguyen Hoang Anh',
    course: 68,
    position: 'Member',
    research_topic: 'EV Charging Station Management System',
    image: DefaultMemberLogo,
  },

  /* Smart Inventory Management System */
  {
    id: 23,
    name: 'Nguyen Minh Phu',
    course: 65,
    position: 'Member',
    research_topic: 'Smart Inventory Management System',
    image: DefaultMemberLogo,
  },
  {
    id: 24,
    name: 'Le Thi Ngoc Diep',
    course: 67,
    position: 'Member',
    research_topic: 'Smart Inventory Management System',
    image: DefaultMemberLogo,
  },
  {
    id: 25,
    name: 'Hoang Quoc Viet',
    course: 65,
    position: 'Member',
    research_topic: 'Smart Inventory Management System',
    image: DefaultMemberLogo,
  },

  /* Target Tracking */
  {
    id: 26,
    name: 'Pham Truong An',
    course: 65,
    position: 'Member',
    research_topic: 'Target Tracking',
    image: DefaultMemberLogo,
  },
  {
    id: 27,
    name: 'Pham Xuan Hieu',
    course: 66,
    position: 'Member',
    research_topic: 'Target Tracking',
    image: DefaultMemberLogo,
  },
  {
    id: 28,
    name: 'Nguyen Trung Kien',
    course: 66,
    position: 'Member',
    research_topic: 'Target Tracking',
    image: DefaultMemberLogo,
  },
  {
    id: 29,
    name: 'Nguyen Xuan Son',
    course: 67,
    position: 'Member',
    research_topic: 'Target Tracking',
    image: DefaultMemberLogo,
  },
  {
    id: 30,
    name: 'Vu Quang Nhat Hai',
    course: 67,
    position: 'Member',
    research_topic: 'Target Tracking',
    image: DefaultMemberLogo,
  },
  {
    id: 31,
    name: 'Nguyen Van Hung',
    course: 67,
    position: 'Member',
    research_topic: 'Target Tracking',
    image: DefaultMemberLogo,
  },
  
  /* Alumni */
  {
    id: 32,
    name: 'Phan Duc Manh',
    course: 65,
    position: 'Alumni',
    research_topic: 'Viettel Aerospace',
    image: DefaultMemberLogo,
  },
  {
    id: 33,
    name: 'Do Tien Hai',
    course: 65,
    position: 'Alumni',
    research_topic: 'FPT Software',
    image: DefaultMemberLogo,
  },
  {
    id: 34,
    name: 'Vu Huy Nhat Minh',
    course: 64,
    position: 'Alumni',
    research_topic: 'PhD Candidate at Nanyang Technological University',
    image: DefaultMemberLogo,
  },
  {
    id: 35,
    name: 'Pham Quang Dai',
    course: 64,
    position: 'Alumni',
    research_topic: 'PhD Candidate at Nanyang Technological University',
    image: DefaultMemberLogo,
  },

  /* Collaborator */
  {
    id: 36,
    name: 'EE Lab',
    course: 65,
    research_topic: 'Aim to become Vietnam’s leading deeptech design house in EVSE and Power Electronics.',
    position: 'Collaborators',
    image: EE_Lab_Logo,
  },
  {
    id: 37,
    name: 'EVSE Lab',
    course: 65,
    research_topic: 'Pioneers energy-saving solutions and advancing sustainable research and practice.',
    position: 'Collaborators',
    image: EVSR_Lab_Logo,
  },
  {
    id: 38,
    name: 'MoCAR Lab',
    course: 65,
    research_topic: 'Priority robotics and automation lab of School of Electrical - Electronic Engineering',
    position: 'Collaborators',
    image: MoCAR_Lab_Logo,
  },
];
