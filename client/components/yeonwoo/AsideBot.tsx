/*
 * 책임 작성자: 박연우
 * 최초 작성일: 2022-11-19
 * 최근 수정일: 2022-12-03
 */

import { useRecoilValue } from 'recoil';
import { userDashboardAtom } from '../../atomsYW';

const arrKor = [
  '친절한',
  '현명한',
  '똑똑한',
  '응가',
  '꼼꼼한',
  '박식한',
  '너그러운',
  '믿음직한',
  '재치있는',
  '도움이 되는',
  '따듯한',
  '사려 깊은',
  '문제를 해결하는',
  '배려심 있는',
  '창의적인',
  '논리적인',
  '이해하기 쉬운',
];

const arrEng = [
  'KINDLY',
  'WISE',
  'SMART',
  'POO',
  'DETAILED',
  'INTELLEGENT',
  'GENEROUS',
  'COHERENT',
  'WITTY',
  'HELPFUL',
  'WARM',
  'CONSIDERATE',
  'PROBLEMSOLVER',
  'CARING',
  'CREATIVE',
  'LOGICAL',
  'UNDERSTANDABLE',
];

export const AsideBot = () => {
  const userDashboard = useRecoilValue(userDashboardAtom);
  return (
    <div className="mt-[74px]">
      <div className="mb-6">
        <span className="text-2xl font-semibold">후기 태그</span>
      </div>
      <div>
        {userDashboard.reviewBadges.map((badge) => (
          <div className="mb-4" key={badge.badge_Id}>
            <button className="bg-main-yellow rounded-full py-[6px] w-32">
              {arrKor[arrEng.indexOf(badge.name)]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};