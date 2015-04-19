
var	effects = {};




//======================
//
//     P L O N G
//
//======================

effects.plong = {};
effects.plong.wav = 
"UklGRiRQAABXQVZFZm10IBAAAAABAAIAIlYAAESsAAACAAgAZGF0YQBQAACAgH5+fX1+foWFkpKdnZ2diYlnZ0dHPj5UVH19oKCp\
qZqag4N2dnl5hoaSkpWWkJCDg3R0Z2dgYGVldXWKipmZnJyQkH19b25sbHZ2goKGhoODf3+AgIKCg4N9fXd3d3d/f4qKjo6IiH5+\
eHh6en9/g4OCgn5+fX1/f4ODgoKAgHx8fX2AgIODg4OAgH5+fHx9fX9/gICBgYCAf39+fn5+fX19fX9/goKEhIKCgIB9fX19f3+B\
gYKCf39+fn9/gYGDg4GBf399fX5+gICBgYCAf39/f4GBgoKBgX5+fHx8fH5+f39/f39/f39/f39/gICAgICAgICCgoKCgIB9fXt7\
fX2BgYODg4OAgH5+fn6BgYKCgYF+fn19f3+BgYKCgIB+fn19fX1/f4CAgYF/f319fn6AgIKCgYGAf319fX1+fn9/gYGBgYGBgIB/\
f39/f3+BgYGBgYGAgH9/f39/f39/f39/f39/f3+AgICAgYGAgICAf39/f35+fn5/f4CAgIB+fn5+f39/f4CAgICBgYGBgICAgH9/\
fn59fX5+gYGEhIODgIB+fn19f3+BgYGBgIB+fn5+fn6AgIGBgYGAgICAgIB/f35+fX19fX19f3+BgYKCgoKAgH9/fn5+fn9/gICB\
gYKCgYGBgYCAgIB/f39/f39+fn9/f39/f39/f39/f4CAgICAgICAgIB/f39/fn5/f39/gICAgICAf39/f4CAgIB/f39/f3+AgICA\
gICAgICAgICAgICAf39/f39/gICAgH9/fn5+fn9/gICBgYGBf39+fn19f3+AgICAgICAgIGBgoKCgn9/fX18fH19gICBgYGBgIB/\
f4CAgYGBgYCAf39+fn9/f39/f39/f39/f4CAgICBgYGBgYF/f35+fn5/f39/f39/f39/gICAgICAf39+fn9/gYGCgoKCgIB+fn5+\
f3+AgICAf39+fn5+f3+AgIGBgIB/f39/f3+AgH9/fn5+fn9/gICBgYCAf39+fn5+gICBgYGBgYGAgH5+fX1/f4aGkpKcnJqahIRi\
YkZGQ0NdXYSEoqKmppaWgoJ4eHt7hoaPj5KSjY2CgnV1aWljY2lpeHiKipeXl5eLi3p6bm5vb3p6hoaKioWFf399fX5+fn56end3\
e3uDg42NjY2FhXt7dnZ7e4CAhISCgn5+fn5/f4ODg4OAgHx8fHx/f4KCg4OBgX9/fHx8fH19f3+BgYGBgYF/f3x8fHx9fYGBgoKC\
goCAfn59fX5+gICCgoKCgYGAf4CAgICBgX9/fn59fX5+f3+BgYKCgYGAgH5+fn5+fn9/gICAgICAfX19fX19f3+AgIGBgYGAgH9/\
f3+AgIGBf39/f39/gYGBgYGBgIB/f39/fn6AgIGBgoKAgH9/f39/f4CAf3+AgICAf3+AgH9/f399fX19fX1/f4GBgYGBgYCAf39/\
f4CAgICAgICAgICAgH9/f3+AgIGBgYGAgH9/fn5/f4CAgICAgH9/fn5+fn9/gYGBgYCAf39+fn5+f39/f39/f39/f4CAgYF/f35+\
fn6AgIGBgoKCgn9/fX18fH5+gYGDg4ODgYF/f35+fn5/f39/f39/f39/f3+AgICAgYGBgYGBgIB+fn19fX19fX5+fn6AgIGBgYGB\
gYGAf4B+fn9/gICBgYGBgYGAgH9/fn5/f4CAgYF/gH9/f3+AgICAgIB/f35+f39/f39/f39+fn9/gICBgYCAf39+fn5+f3+BgYKC\
gYF/f35+fn5/f39/f39/f4CAgYGAgH9/f39/gICAgYGAgH9/fn5+fn9/gICBgYCAf39+fn19fn5/f4CAgICAgIGBgYGBgYCAf39/\
f39/f39/f39/f3+AgICAgICAgH9/f3+AgICAgIGAgH9/f39/f4CAgICAgH9/f39/f35+fn5/f4CAgYGBgX9/fn5+fn9/gICBgYCA\
fn5+foKCjIyXl5qajo5zc1hYSkpUVHFxkJCfn5ubi4t9fXp6gYGLi5GRkJCHh3p6bm5mZmdncnKCgpCQlZWQkIODdnZxcXV1f3+F\
hYSEgIB+foCAgYF/f3p6eHh9fYaGjIyJiYGBenp7e39/goKBgXx8e3t9fYODhoaDg35+e3t9fYGBg4OCgn5+fHx8fH9/gYGCgoCA\
fn59fXx8fX1+foCAgYGCgoGBf39+fn5+gICBgYKCgYF/f39/gICCgoGBgIB/f39/gICAgICAfn5+fn5+f3+AgICAgIB/f4CAf39+\
fn5+fn5/f39/f39/f39/gICBgYKCgICAgH9/f3+AgICAgYGAgIGBgIB/f39/fn5/f4CAgYGAgH9/f39+fn9/f39/f39/gIB/f39/\
f39/f4CAf3+AgICAf39/f39/gICAgIGBgYGBgYGBf39/f39/f39/f39/gICAgICAgICAgICAgICAgICAgIB/f35+fn59fX5+fn5/\
f4CAgICAgH9/gICAgIGBgYGBgYGBgIB+fn19fX1+foCAgoKCgoGBgIB/f39/f3+AgH9/gIB/f4CAgICAgICBf39/f35+f39/f39/\
fn59fX5+gICBgYGBgICAgICAgICAgH9/f39/f4CAgICBgYGBgIB/f39/f39/f39/f39/f35+fn5/f39/gICBgYGBgYGAgH9/f39+\
fn9/f39/f39/f39/f4CAgICAgICAgICAgICAgIB/f39/f39/f39/f39/f4CAgYGBgYCAfn5+fn5+f3+AgIGBgYF/f39/fn5/f39/\
gICAgICAgIB/f39/f39/f4CAgICAgH+Af39/f39/gIB/f4GBhoaQkJiYlZWDg2dnUVFNTWBgf3+YmJ+flZWEhHl5e3uEhI6OkZGN\
jYODdXVqamVla2t5eYmJlJSUlIuLfHxzc3JyeXmCgoWFhISAgH9/f39+fnx8eXl8fIKCiIiJiYODfX15eXx8f3+CgoGBfn5/f4CA\
g4ODg4CAfX19fX9/gYGCgoCAfn59fX19f3+AgIGBgYGAgH5+fX18fH19gYGDg4ODgYF+fnx8fX1/f4GBgoKBgYCAgICAgICAf39+\
fn5+f3+AgIGBgoKAgH9/fn5+fn9/f39/f4CAgICAgH9/f39/f39/f39/f39/f3+AgICAgICAgICAgICBgYKCgYGAgH9/f39/f4CA\
gICAgICAgICAgICAgIB/f35+f39/f4CAf39/f35+fn5/f39/gIB/f4CAgICAgICAgICAgICAgYGAgH9/f39/f4GBgYGBgYCAfn5+\
fn5+gICBgYGBgIB/f39/fn5/f39/f39+fn9/gICAgIGBgIB/f35+fn5/f4CAgICAgICAgICAgH9/fn5+fn9/gYGCgoKCgYF/f39/\
f3+AgICAf39+fn5+fn5/f4GBgoKBgYCBf39+fn5+fn5+fn5+fn5/f4CAgYGBgYGBgIB/f35+fn9/f4GBgYGBgYCAf39/f39/gICA\
gICAf39+fn9/f3+AgH9/f39/f39/gICAgICAf39+fn9/gICBgYCAf39+fn5+f3+BgYGBgYGAgH9/f39/f4CAgIB/f39/f3+AgICA\
gYGAgICAf39/f35+f39/f35/f3+CgoqKk5OWlouLdHRcXFBQW1t1dZCQnJyXl4iIfHx7e4KCioqPj42NhoZ7e3Bwampra3V1g4OP\
j5OTjY2BgXV1cnJ2doCAhYWFhYGBf39/f4CAf397e3p6fX2Dg4iIhYWAgHt7fHx/f4KCg4OBgX9/f3+BgYGBgIB+fnx8fX6AgIOD\
g4OBgX9/fX1+fn9/gICAgH9/fn59fX5+fn6AgIGBgYGBgX9/f39+fn9/gICBgYGBgICBgYCAgYGAgH9/fn5/f4CAgICBgX9/f39/\
f4CAgYGAgH9/fn5+fn9/f39/f35+f3+AgIGBgIB/f39/f39/f39/gICBgYKCgoKBgYCAfn5+fn5+gICBgYGBgYF/f39/f39/f4CA\
gICAgH9/f39/f39/fn5+fn5+f3+BgYGBgIB/f35+f39/f4CAgICAgICAgICAgH9/f3+AgICAgYGAgICAf39/f39/f3+AgH9/gIB/\
f4CAf39/f39/f39/f39/fn5+fn9/gYGBgYGBgIB+fn5+f3+BgYKCgYF/f35+fn5/f4GBgoKBgYCAf39/f39/f39/f39/f3+AgICA\
f3+AgICAgYCAgH9/fn59fX19fn5/f4CAgYGCgoKCgoKAgH5+fX19fX5+gICCgoKCgoKBgX9/fn5+fn9/gICAgICAgIB/f35+fn5+\
foCAgYGBgYCAfn5+fn9/gICAgH9/f39/f4CAgYGBgYGBgIB/f319f3+EhIyMlJSUlIiIcnJcXFRUX194eJCQmpuVlYeHfHx7e4GB\
ioqOjoyMhIR5eXBwa2ttbXd3hISPj5KSjIyAgHV1c3N4eIGBhYWFhYGBf3+AgICAfn56enp6f3+FhYiIhYV/f3p6enp+foKCgoKA\
gH9/f3+BgYGBgIB+fn19gICBgYKCgYF+fn19fHx+fn9/gYGBgYGBgIB+fn5+fn5/f4CAgICAgH5+f39/f4CAgYGBgYCAf3+AgICA\
gIB/f35+fn6AgIGBgYGAgH9/f3+AgICAgIB+fn5+fn5/f39/f39/f4CAgYGAgH9/f39/f4GBgYGBgX5+fn5+fn9/gICAgICAf3+A\
gIGBgoKBgYCAf39/f39/fn5+fn5+fn6AgIGBgoKBgX9/fX19fX5+fn5/f4CAgYGBgYGBgIB/f35+fn5/f39/gICAgICAgICAgICA\
gICAgICAf39/f35+f39/f4CAgICAgICAgICAgH9/f39+fn5+fn5/f4CAgIB/f35+fn5/f4CAgoKCgoGBf39+fn19fn6AgIGBgYGA\
gH9/f3+AgICAgYGBgYCAf39+fn5+f3+AgIGAgYGAgH9/f39/f35+fn5+fn5+gICBgYGBgYF/f35+fn5/f4CAgICBgYCAgICAgICA\
f39/f39/f3+AgICAgICAgICAgIB/f39/fn6AgIWFjY2Tk5CQgoJsbFpaV1dmZn5+kpKZmZGRhYV9fX19hISLi42NiIiAgHd3cHBu\
bnJye3uHh4+PkJCJiX19dXV0dHl5gYGEhIODgIB/f39/f39+fnt7fHyAgIaGh4eDg35+enp8fH9/goKBgX9/f3+AgIODgoKAgH59\
fX1/f4GBgoKAgH5+fX1+fn+AgICAgH5+fn5+fn5+f39/f4CAgICBgYCAf39+fn5+f3+AgIGBgYGBgYGBgYGAgH9/gIB/f4CAgICA\
gH9/fn6AgICAgYGAgH9/fn5/f39/f39+fn19fn5/f4CAgYF/f39/f3+AgIGBgICAgH9/f3+AgICAgICAgICAgICBgYCAgICAgICA\
gICAgICAf39+fn5+fn5/f39/f39/f4CAgICAgICAf39/f39/f39/f35+f3+AgIGBgoKBgYCAf3+AgICAgIB/f4CAgICAgIGBgIB/\
f35+f39/f39/f39/f39/gICAgICAf39/f35+f39/f39/gIB/f4GBgYGBgYCAf39/f35+fn5/f4CAgYGCgoKCgIB/f35+fn5/f4CA\
gICAgICAf3+AgICAgICAgH9/f39+fn5+fn5+fn5+f3+AgICAgYGBgYCAgIB/f4CAgICBgYGBgYGAgIGBhoaNjZGRjIx8fGdnWlpc\
XG5uhYWVlZWVjIyAgHt7fn6FhYuLjIyHh35+dXVvb25udHR/f4qKkJCOjoSEeXl0dHV1fX2Dg4WFhISAgH9/f39/f35+fHx+foGB\
hISEhICAfX18fH9/gICBgX9/fn6AgIGBg4OAgH9/fX1+foCAgoKCgoCAgIB/f35+fn5+fn5+f3+AgICAgICAgH5+f39/f4CAgIB/\
f39/f3+AgICAgICAgICAgICBgYGBf39/f35+f39/f4CAf39/f4CAgYGBgYGBgIB/f39/f39/f39/fn5+fn5+f39/f4CAgYGBgYKC\
gIB/f35+fX1+fn9/gICAgICAgICAgIGBgICBgYCAgIB/f39/f39+fn5+fn6AgICAgICAgH9/f39/f4CAf39/f39/f3+AgH+Af39/\
f39/f39/f4CAf3+AgIGBgYGBgYCAf39+fn9/gICAgIGBgICAgICAf39+fn5+f3+AgIGBgIB/f39/f39/f39/f39/f39/f3+AgICA\
gYGBgYCAf39+fn9/gICBgYGBgIB/f39/f3+AgICAgICAgICAgIB/f39/f39/f39/f3+AgH9/f39+fn5+f3+BgYiIjo6RkYuLenpn\
Z1tbX19xcYiIlpaVlYyMgIB8fH9/hYWKioqKhoZ+fnd3cHBvb3R0fn6JiY6OjIyDg3l5dHR2dn19goKEhIKCgICAgH9/fn58fHt7\
fX2CgoaGhoaDg39/fX1+foCAgYGAgICAgICBgYGBf398fHt7fn6BgYSEhISBgX1+e3t8fH5+gICBgYCAgIB+fn19fX1+foCAgoKC\
goCAf39+fn9/gYGBgYGBf3+AgICAgYGBgYCAf39+foCAgYGBgX9/fn5+fn5+gIB/f39/fn5/f39/f3+AgH9/f39/f4CAgICAgICA\
gICAgICAgICAgICAgIB/f4CAf39/f4CAgYGCgoGBgIB+fn5+fn5+fn9/f39/f39/f3+AgH9/f39+fn9/f3+AgICAf39/f39/gICA\
gIGBgYGAgICAf3+AgICAgICBgYCAgIB/f4CAf39/f39/fn5/f39/gICAgICAf39/f39/f39/f39/fn5+fn9/gICBgYGBf39+fn9/\
gICBgYKCgYGAgH5+f39/f4CAgICAgH9/f39/f39/f4CAgICAgIB/f4CAhISLi5CQjo6Dg3BwYGBcXGdnenqNjZWVkJCGhn5+fn6D\
g4mJjIyJiYKCeXlzc3BwcnJ6eoODjIyNjYiIf394eHd3enqAgIGBgYF/f39/gYGBgX9/e3t7e35+g4OGhoSEgIB9fX5+gICCgoGB\
f39+fn5+gYGBgYCAf39+fn9/gICCgoGBgIB/f35+fn5+fn5+fn5/f39/f39/f39/f39/f4CAgICAgICAf3+AgICAgICAgIGBgYGB\
gYCAf39/f39/gICAgICAf39+fn5+fn5/f4CAgICAgH9/f39+fn5+f39/f4CAf39/f39/gICAgIGBgICAgICAf3+AgICAgICAgICA\
gYGBgYGBgIB/f39/f3+AgICAgIB/f35+fn5/f4CAgICAgH9/f39/f35+fn5+fn9/gICAgICAgH+AgH9/gICBgYGBgYGAgICAf39/\
f39/f39/f4CAgICAgH9/f39/f4CAf39/f39/f39/f39/f39+fn5+fn5/f4CAgYGAgH9/f3+AgICAgYGAgH9/fn5/f4CAgICBgYOD\
iIiNjY+PiIh6emlpX19jY3JyhISRkZKSi4uBgX19f3+FhYqKioqFhXx8dXVwcHFxd3eAgIiIjIyKioSEfHx4eHl5f3+Dg4SEgoJ/\
f39/f39/f319fHx9fYCAhISEhIKCfn59fX9/gICAgH9/fn5/f4GBgYGAgH5+fHx+foGBg4ODg4CAfn58fH19f3+BgYGBgICAgH5+\
fn5+fn9/gICAgICAf39+fn5+f3+AgIGBgYGAgICAf39/f39/f39/f4CAgYGBgYGBf39/f39/gICBgYGBgIB/f35+fn5+fn5+f3+A\
gIGBgYGAgH5+fn5/f4GBgYGAgH9/fn5+fn9/gICAgIGBgYGBgYGBgIB/f35+f39/f4CAgIB/f4CAgICAgICAgIB/f39/f39/f39/\
f39+fn9/f3+AgH9/gICAgIGBgYGAgH9/fn5+fn9/gICBgYCAgIB/f4CAgICAgICAf3+AgH9/f39/f39/f39/f4CAgIB/f39/f39/\
f39/f39/f39/gICDg4iIjY2NjYWFd3dpaWJiZ2d2doiIkpKRkYiIfn58fICAh4eMjIuLhYV7e3R0cHBycnl5gYGJiYuLiIiAgHh4\
dnZ4eH9/g4OEhIKCgICAgH9/fn58fH19gICDg4aGhISBgX19fX1/f4CAgYF/f39/gICBgYGBf39+fn19f3+AgIGBgYF/f35+fX1+\
fn9/gICBgYCAgIB+fn5+fn5/f4CAgICBgYCAgICAgICAgICAgICAgICAgICAgIB/f39/f3+AgICAgIB/f35+fn5/f39/gICAgH9/\
f39/f39/f39/f39/f39/f39/f3+AgIGBgYGBgYCAgIB/f39/gICAgICAf39/f39/gICAgICAgICAf39/f39/f39/f3+AgH9/f39+\
fn5+fn5/f4CAgICBgYCAgICAgICAgIB/f39/f3+AgIGBgYGAgICAgICAgICAf39/f39/f3+AgICAgIB/f39/f39/f39/f39/f4CA\
gICAgH9/gYGGhouLjo6IiHt7a2tjY2ZmdXWFhY+Pj4+IiICAfX2AgIaGioqKioWFfn52dnFxcXF3d39/iIiLi4mJgoJ7e3h4eXl9\
fYGBg4OCgoGBf39+fn19fHx8fH9/g4OGhoWFgoJ+fn19fn6AgIGBgICAgH9/gICBgYCAf39+fn9/gICBgYGBgIB/f35+fn5+fn9/\
f39/f39/f39/f35+f3+AgIGBgoKBgYCAfn5/f39/gICAgICAgYGAgICAgIB/f39/f3+AgICAf39+fn5+f3+AgIGBgICAgH5+fn5+\
fn9/gIB/f39/f39/f4CAgICAgICAgICAgICAgIB/f39/f3+AgICAgIB/f39/f39/f4CAf39/f39/gICAgICAf39/f39/f39/f39/\
fn5+fn9+gICAgIGBgIB/f35+fn5/f4CAgYGBgYGBgIB/f39/f39/f4CAgIB/f39/f39/f4CAgYGAgICAgYGGhoqKjIyHh3p6bGxj\
Y2Zmc3ODg4+PkJCKioKCfn6AgIWFiYmIiISEfX13d3JycnJ4eICAiIiMjIqKg4N7e3h4eXl9fYCAgoKBgYCAgICAgH9/fX19fX9/\
gYGEhIODgIB9fX19fn6AgIKCgYGAgH9/gH+AgICAgICAgICAgYGBgYCAf39+fn19fn5/f39/gICAgICAf39+fn9/f3+AgICAgIB+\
fn5+f3+AgIGBgICAgICAgICAgICAgIB/f39/f39/f4CAgICAgH9/f3+AgICAgICAgICAfn5+fn5+fn5/f4CAf39/f35+f3+AgIGB\
gYGAgH9/f39/f4CAgICAgICAgICAgICAgICAgH9/f39/f4CAgICAgH9/f39+fn9/f3+AgICAf39/f39/f39/f39/f39/f39/f3+A\
gICAgICAgICAgIB/f39/f39/f4CAgICAgIKChoaLi42NiIh9fW9vZWVmZnFxgICLi46OioqDg39/gICEhIeHiIiFhYCAeXl0dHNz\
d3Z+foaGioqJiYODfHx5eXp6fn6BgYKCgYGAgICAgIB/f319fHx9fYGBhISFhYKCf399fX19fn5/f35+fn5/f4GBgoKBgYCAf39/\
f39/gICAgICAgICAgIGBgIB/f39/fn5+fn5+fn5/f39/gICAgICAf39/f39/gICAgICAf39/f39/gICBgYCAgIB/f3+AgICAgICA\
f39/f39/f3+Af4CAgICAgICAf39+fn5+f3+AgIGBgIB/f35+f3+AgIGBgIB/f35+fn6AgICAgICAgICAgICAgIGBgIB/f39/f39/\
f39/f39/f39/gICAgICAf39/f39/gICAgICAf39+fn9+f3+AgICAf39/f4CAgICAgICAf3+AgIODh4eLi4uLg4N3d2trZmZsbHl5\
h4ePj46Oh4d/f319gICFhYiIh4eCgnx8dnZzc3V1enqCgoiIioqHh4GBe3t4eHp6fn6BgYKCgoGBgYCAf39+fnx8fX1/f4KChISD\
g4CAfn5+fn9/gYGBgX9/fn5+fn9/gIB/f35+fn5/f4CAgYGBgYCAf39+fn5+f39/f4CAgYGAgICAf39+fn9/gICBgYCAgIB/f35/\
f39/f39/gICAgIGBgYGBgYCAfn5+fn5+f3+AgICAgIB/f39/gICAgICAgICAgH9/fn5+fn9/f3+AgICAgICAgICAgYGAgICAf39+\
fn9/gICAgIGBgICAgH9/f39/f39/f3+AgICAgICAgICAgIB/f35+fn5+fn9/f3+AgICAgICAgICAgICAgH9/f39/f39/f39/f4CA\
hISIiIuLioqCgnZ2a2tnZ21te3qIiI6OjIyFhX9/fX2BgYaGiIiHh4KCfHx2dnNzdXV6eoKCiIiLi4eHgIB6enh4enp/f4KCg4OC\
goCAf399fXx8fX1+foGBhIOEhIKCf39+fn5+gICAgICAf39/f4CAgYGBgYCAf39+fn5+f3+AgICAf39+fn5+f3+AgICAgIB/f39/\
fn5/f4CAgYGBgYCAf39/f39/gICAgICAf39/f39/gYGBgYGBgIB/f35+fn5/f4CAgICAgICAgICAgH9/f3+AgH9/f39+fn5+fn5/\
f4CAgICAgICAgIB/f39/f39/f4CAgICBgYCAf39/f39/gICAgICAgICAgH9/f39/f39/f39/f39/gICAgICAf39/f39/f3+AgICA\
f39/f35+f3+AgISEiYmMjIqKgYF1dWpqaGhvb3x8iYmOjoyMhYV/f319gYGFhYiIh4eCgnx8dnZzc3R0enqBgYiIioqHh4CAe3t5\
eXt7f3+CgoKCgYGAgH9/f39+fn19fX2AgIKChISDg4CAfn5+fn9/gICAgICAgICAgICAgICAgH9/f39/f4CAgIB/f39/fn5+fn5+\
f39/f4CAgICAgH9/f39+fn9/gYGCgoGBgIB/f35+fn5/f4CAgICAgICAgICBgYGBgIB/f39/f3+AgICAgIB/f39/fn5+fn5+f39/\
f4CAgICAgH9/f39/f39/gICAgH9/f39/f4CAgICAgICAgICAgICAgIB/f39/f39/f39/gICAgICAgICAgICAf39+fn5+fn5/f4CA\
gICAgH9/f39/f4GBhoaKiouLhoZ7e29vaGhra3d3hISMjI2Nh4eBgX9/gYGEhIeHh4eDg35+eXl1dXR0eHh/f4aGiYmHh4KCfHx5\
eXp6fn6BgYKCgYGAgH9/f39+fn19fn6AgIKChISDg4CAfX19fX5+gICBgYGBgYGAgIGBgIB/f35+fX1+fn9/gYGBgYGBgIB/f39/\
fn5+fn9+f39+f35+fn5/f39/gICBgYGBgIB/f39/gICAgIGBgYGBgYCAgIB/f39/fn5+fn9/f3+AgICAgICAgH9/gICAgICAf39+\
fn5+fn5/f4CAgIB/f39/f39/f4CAgICAgIGBgICAgH9/f39/f39/f3+AgICAgICAgICAgICAgICAf4B/f39/f39/f39/f39/f39/\
f3+BgYSEiIiJiYaGfX1ycmpqa2t0dICAi4uOjoqKg4N+fn9/g4OHh4iIhYV/f3l5dXV0dHd3fX2EhIiIiIiEhH5+enp5eXx8gICC\
goKCgYGAgH9/fn59fX18fn6BgYODg4OCgoCAf39/f4CAgIB/f39/f3+AgIGBgIB/f39/f3+AgIGBgIB/f39/fn5/f39/gICAgICA\
f39+fn19fX1+fn9/gICBgYGBgIB/f39/f3+AgIGBgYGBgYCAgIB/f39/f3+AgICAgICAgH9/f39/f39/f39/f39/gICAgICAf39/\
f35+fn5/f39/f39/f39/gICBgYGBgYGAgH9/f39/f4CAgICAgICAgICAgICAgIB/f4CAgICAgH9/f39+fn9/g4OIiIqKiIh/f3R0\
a2tqanFxfX2IiI2NioqEhH9/f3+CgoaGh4eFhYGBe3t3d3Z2d3d8fIKCh4eIiIWFf397e3p6fX2AgIKCgYGAgH9/f39+fn19fX1+\
foCAgoKDg4KCf39+fn5+gICBgYGBgICAgICAgICAgH9/f3+AgIGBgYGBgX9/fn5+fn9/f3+AgICAf3+AgICAf39+fn5+fn5/f4CA\
gH9/f39/f3+AgIGBgICAgH9/gICBgYGBgYGAgICAgICAgH9/f39/f39/gICAgICAf39/f4CAgIB/f35+fX1+fn9/gICAgICAgICA\
gICAgICAgH9/f3+AgICAgYGBgYCAf39/f39/gICAgICAf39/f4CAg4OHh4qKiIiAgHV1bGxqanBwe3uGhoyMioqFhYCAf3+BgYSE\
hoaFhYGBfHx4eHZ2eHh9fYODh4eIiIWFf397e3p6fX2AgIGBgYGAgH9/f39+fn5+fX1+foCAgoKDg4KCf39+fn19fn6AgIGBgYGB\
gYGBgYGAgH9/fn5+fn9/gYGCgoKCgIB/f35+fn5/f4CAgICAgH9/fn5+fn9/gICBgYGBgIB/f35+fX1+fn9/gICAgICAgYGBgYCA\
gICAgICAgICAgICAgIB/f39/gICAgICAgICAgH9/f39+fn9/f39/f39/gIB/f39/f39/f39/f39/f4CAgICAgICAgICAgICAgICA\
gICAgICAgIODhoaJiYiIgoJ4eG9va2twcHt7hoaLi4mJhIR/f359gICEhIaGhoaCgn19eHh2dnd3e3uBgYaGiIiFhYCBfHx6enx8\
f3+CgoODgoKBgYCAf39+fn19fn5/f4GBgoKBgYCAfn5+fn9/gH+AgICAgICAgICAgICAgH9/f3+AgICAgIB/f39/f39/f4CAgICA\
gICAf39/f39/gH+AgICAgICAgH9/f39/f3+AgICAgH9/f39+fn5+f3+AgICAgICAgICAgIB/f39/f3+AgICBgYGAgICAf39/f39/\
f39/f39/fn5/f39/gICAgICAgICAgH9/f39/f39/gICAgICAf39+fn5+gICFhYmJioqGhn5+c3NtbW1tdXV/f4iIi4uIiIODgICA\
gIKChYWFhYODf396enZ2dnZ5eX9/hISHh4aGgoJ+fnt7e3t9fYCAgYGBgYCAgICAf39/fn5+fn9/gICCgoKCgYGAgH9/f39/f4CA\
f39/f39/gICAgICAf39/f39/f3+AgIGBgIB/f35+fn5+fn9/gICAgICAf39+fn9/f3+BgYGBgYGAgH9/f3+AgICAgICAgH9/f39/\
f39/f39/f39/gICAgICAgICAgH9/f39/f39/gICAgICAf39/f39/f39/f4CAf39/f39/gICAgIGBgICAgH9/f39/f39/f3+BgYWF\
iIiJiYWFfX1zc21tbm52doCAiIiKioeHgoJ/f4CAg4OFhYWFg4N/f3p6d3d3d3p6f3+EhIeHhoaCgn5+e3t7e319gICBgYGBgICA\
gH9/fn5+fn5+f3+AgIKCgoKBgYCAf39+fn5+f39/f4CAgICBgYGBgIB/f39/f3+AgICAgIB/f39/f3+AgICAf39/f39/f3+AgICA\
gICAgH9/f39+fn9/f39/f39/gICAgIGBgYGAgICAgICAgH9/f39+fn5+f3+AgICAgYCBgYCAgICAgH9/fn5+fn9/gICAgICAf39/\
f39/f3+AgICAgIB/f39/f3+AgIODhoaIiIeHgYF4eHBwbm5zc319hYaKioiIhISAgICAgoKEhIWFhISAgHx8eHh3d3h4fHyCgoaG\
h4eEhICAfHx7e3x8fn6AgIGBgYGBgYCAf39+fn5+fn6AgIGBgoKBgYCAf39/f39/gICAgICAgICAgICAgIB/f39/fn5/f4CAgICA\
gH9/f39/f39/gICAgICAf39/f35+fn5/f4CAgYGBgYGBgIB/f39/f39/f4CAgICAgIGAgYGBgYCAgIB/f39/f39/f39/f39/f39/\
f3+AgICAgICAgH9/f39/f39/gICAgICAgIB/f39/gICCgoWFh4eIiIWFfX11dW9vcHB2dn9/hoaJiYeHg4OAgICAgoKEhIWFg4N/\
f3t7eHh3d3l5fn6Dg4aGhYWCgn5+fHx8fH5+f3+AgICAgICBgICAf39+fn19fn6AgIODg4OCgn9/fn5+fn5+f3+AgICAgICAgICA\
gIB/f35+fn5/f4CAgYGAgH9/f39/f39/gICAgICAgICAgH9/f39/f39/f39/f4CAgICAgICAgIB/f39/f3+AgICAgIB/f39/f39/\
f4CAgICAgICAgIB/f39/f39/f39/f39/f39/f39/f39/f39/f4CAgoKFhYiIiYmEhHx8c3NubnBvd3eAgIeHiYmHh4ODgICAgIKC\
hISFhYODf396end3d3d6eX5+hISHh4aGgoJ+fnx8fHx9fX9/gYGBgYCAf39+fn5+fX1+foCAgoKDg4ODgYF/f35+fX1+fn9/gICA\
gICAgICAgICAf39/f39/f3+AgICAgICAgH9/fn5+fn9/f3+AgICAf39/f39/f3+AgICAgIB/f39/f39/f39/gICAgICAgICAgICA\
gICAgICAf39/f39/f3+AgICAgICAgH9/f39/f39/f39/f39/f3+AgIODhoaIiIeHgYF5eXFyb29zc3t7hISJiYiIhYWBgYCAgYGE\
hIaGhYWCgn19eXl3d3h4fHyAgISEhYWEhICAfX18fHx8fn6AgIGBgYGAgICAf39+fn5+fn6AgIKCgoKCgoCAf39+fn9/gICAgICA\
gICAgICAgICAgH9/f39/f39/gIB/f39/f39/f39/f39/f39/f39/f39/f39/f4CAgICBgYGAgICAgH9/f39/f39/gICAgICAgICA\
gICAf39/f39/gICAgH9/f39/f39/f3+AgICAgIB/f39/f3+BgYSEhYWDg35+d3dycnNzeHiAgIaGiIiGhoODgYGBgYODhYWFhYOD\
f397e3l5eHh7e35+goKFhISEgoJ+fnx8fHx9fX9/gICBgYCAgIB/f35+fn5+fn9/gICBgYKCgYGAgICAf39/f39/gICAgICAgICA\
gICAf39/f39/gICAgICAgIB/f39/fn5+fn5+fn5/f39/f39/f39/gICAgIGBgIB/f39/f39/f4CAgYGBgYCAf39/f39/f3+AgICA\
gICAgICAf39/f39/gICAgICAf39/f4GBhISGhoWFgYF6enR0cHBycnl5gYGHh4iIhoaDg4CAgICCgoSEhISDg4CAfHx5eXl5e3t/\
f4ODhYWEhIGBfn58fHx8fn6AgIGBgYGAgH9/fn5+fn5+fn5/f4GBgoKCgoCAf39+fn5+f3+AgIGBgICAgICAgICAgICAf39/f4CA\
gICAgICAf39/f35+f39/f39/f39/f39/f39/f39/gICAgICAf39/f39/gICBgYGBgYGAgH9/f39/f39/f3+AgICAgICAgICAgIB/\
f39/gICBgYSEhoaGhoKCe3t0dHFxcnJ4eICAhoaHh4WFgYGAgIGBg4OFhYWFgoJ/f3t7eXl5eXx8gICEhIaGhYWCgn5+fHx8fH19\
f3+AgIGBgYGAgH9/fn5+fn19fn5/f4CAgYGBgICAf39/f39/gICAgIGBgYGAgICAgIB/f39/f3+AgIGBgYGAgH9/f39+fn9/gICA\
gICAf39+fn5+fn5/f39/gICAgICAf39/f39/f3+AgICAgICBgYGBgIB/f39/f39/f4CAgICAgICAgYGDg4WFhoaEhH9/eHhzc3Fx\
dXV8fIODh4eHh4SEgYGAgIGBg4OEhIODgIB8fHp6eXl7e35+goKEhIWFg4OAgH5+fX1+fn9/gICAgICAf39/f39/fn5+fn9/gICB\
gYGBgIB/f39/fn5/f39/gICAgICAgICAgICAgICAgH9/gICAgIGBgYGAgH+Af39/f39/f39/f39/f39/f39/f39/f39/f39/f39/\
gICAgH9/f39/f39/f3+AgICAgICAgICAgIB/f39/gICCgoWFh4eGhoGBenp0dHFxdHR7e4KChoaGhoSEgYF/f4GBg4OEhISEgYF9\
fXl5d3d5eXx8gYGFhYaGhISBgX5+fX19fX5+gICBgYGBgYGAgH9/fn5+fn5+f3+BgYKCgYGAgH9/fn5/f39/gICAgIB/f39/f4CA\
gIB/f39/f3+AgICAgICAgH9/f39/f4CAgICAgH9/f39/f39/gICAgICAgICAgH9/f39/f39/f3+AgICAgICAgH9/f39/f39/f3+B\
gYODhYWGhoWFgYF6enV1c3N2dnt7goKFhYaGhISCgoGBgYGDg4ODg4OBgX5+e3t5eXp6fHyAgIODhISDg4CAfn59fX19f3+AgIGB\
gYGAgICAf39/f35+f3+AgIGBgYGBgYCAf39+fn9/gICAgICAgICAgICAgIB/f39/f39/f4CAgICAgICAf39/f39/f3+AgICAf39/\
f39/f39/f4CAgICAgICAf39/f39/f3+AgICAgICAgICAgICAgICAgICCgoSEhYWEhICAeXl0dHJydXV8fIODh4eHh4SEgYF/f4CA\
goKEhIOEgYF+fnt7eXl6en19gYGEhISEg4OAgH19fHx9fX9/gIGBgYGBgIB/f35+fn5+fn9/gICBgYKCgYGAgH9/fn5+fn9+f3+A\
f4CAgICBgYGBgICAgH9/f39/f4CAgIB/f39/f39/f39/f39/gH9/f39/f39/gIB/f4CAgICAgICAf39/f39/f39/f4CAgYGBgYCA\
gYGCgoSEhYWEhH9/enp1dXR0d3d9fYODhYWFhYODgYGAgIGBg4ODg4KCgIB9fXp6eXl7e35+gYGEhIWFg4OAgH5+fX19fX5+f3+A\
gICAgICAgICAf39+fn9/f3+AgIGBgYGAgICAf3+AgICAf39/f39/f3+Af39/f39/f39/gICAgICAgIB/gH9/f39/f39/gICAgICA\
gICAgH9/f39/f4CAgICAgH9/f39/f39/f39/f39/gICBgYSEhoaGhoKCfX13d3NzdHR5eX9/hISGhoWFgoKAgICAgYGDg4SEgoKA\
gHx8enp5eXt7f3+Dg4WFhISCgn9/fX19fX5+f3+AgICAgICAgICAf39+fn5+fn5/f4GBgoKBgYCAf39/f39/gICAgICAgICAgICA\
f39/f39/f39/f4CAgICAgICAf39/f39/f39/f39/f39/f39/f39/f4CAgICAgICAgICAgICAgICAgICAgoKEhIWFhYWBgXt7dnZ0\
dHd3fHyCgoWFhYWDg4GBgICBgYKCg4OCgoCAfX16enl5e3t+foGBhISEhYODgIB+fnx8fHx+foCAgYGCgoGBgICAgH9/fn5+fn9/\
gICAgIGBgICAgH9/f39/f39/f3+AgICAgICAgICAf39/f39/f39/f4CAgICAgICAf39/f39/f39/f39/f4CAgICAgICAgH9/f39/\
f39/gICAgIKChISFhYWFgoJ9fXd3dHR1dXl5f3+Dg4WFhISCgoGBgICCgoODhISDg4CAfHx5eXh4e3t+foKChYWEhIKCf399fX19\
fn6AgIGBgYGAgH9/fn5+fn5+f3+AgIGBgYGBgYCAf39/f39/f39/f4CAgICAgICAgICAgICAf39/f39/gH+AgICAgICAgICAgIB/\
f39/f39/f35+fn5/f39/gICAgICAgICAgICAgoKEhIWFg4N/f3p6dnZ1dXh4fX2CgoWFhYWDg4GBgICBgYKCg4OCgoCAfn57e3p6\
e3t9fYCAgoKDg4KCgIB/f35+fn5+fn9/gICAgICAgICAgH9/f39/f4CAgYGBgYGBgIB/f39/fn5/f39/f39/f4CAgICAgICAf39/\
f35+f3+AgICAgICAgH9/f39/f39/f3+AgICAf39/f4B/gICAf39/gICBgYODhYWFhYKCfn55eXZ2dnZ5eX9/g4OFhYSEgoKBgYCA\
goKDg4ODgoJ/f319e3t6ent7fn6BgYODg4OCgn9/fX19fX5+f3+BgYGBgYGAgH9/f39/f39/f3+AgIGBgYGBgYCAf39/f39/f39/\
f39/f39/f39/f39/f4CAgICAgICAgIB/f39/f39/f4CAgICAgICAf39/f39/f39/f39/gYGCgoSEhYWDg4CAe3t2dnV1eHh9fYKC\
hYWFhYODgYGAgICAgoKDg4ODgYF+fnt7enp7e35+gICCgoODgYF/f35+fX1+fn9/gICAgICAgIB/gH9/f39/f39/gICBgYGBgYGA\
gH9/f39/f4CAgICAgICAgICAgICAf39/f39/f39/f4CAgICAgH9/f39/f39/gICAgICAgIB/f39/gICBgYODhISEhIKCfX14eHZ2\
dnZ6eoCAhISFhYWFgoKBgYCAgYGCgoKCgYF/f3x8e3t7e319f3+CgoODgoKBgX9/fn59fX5+f3+AgICAgICAgH9/f39+fn9/f4CA\
gIGBgYGBgYCAf39/f39/f39/f39/gICBgYGBgYGAgH9/fn5+fn9/f39/f39/f39/f39/f39/f39/f39/f4CAgoKEhIWFg4OAgHt7\
d3d2dnh4fX2BgYWFhYWEhIKCgYGBgYKCgoKCgoCAfX17e3p6e3x+foGBg4ODg4KCgIB+fn19fX1+fn9/gICAgICAgIB/f39/f39/\
f4CAgICBgYGBgYGAgICAf39/f39/f39/f4CAgICAgH9/f39/f39/gICAgICAgIB/f35+fn5+fn9/f3+AgIGBgoKEhISEgoJ+fnp6\
d3d3d3p6fn6CgoWFhISDg4GBgYGBgYKCgoKBgX9/fX18fHt7fHx/f4GBgoKCgoGBf39+fn19fn5/f39/gICAgICAgIB/f39/f39/\
f4CAgICAgICAgIB/f4CAgICAgICAgIB/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/gICCgoODg4OBgX5+enp4eHh4\
e3t/f4ODhISEhIKCgYGAgIGBgoKCg4KCf4B9fXt7e3t8fX9/gYGDg4KCgYF/f35+fn5+fn5+f39/f39/f39/f39/f3+AgICAgICB\
gYGBgICAgH9/f39/f39/f3+AgICAgYGBgYCAgIB/f35+fn5/f39/gICAgH9/f3+AgIGBgoKDg4ODgYF9fXl5d3d3d3p6f3+Cg4WF\
hISDg4GBgYGBgYKCg4OCgoCAfn57e3t7fHx+foGBg4ODg4KCgIB+fn19fn5+fn9/gICAgH9/f39/f39/f39/f39/gICAgICAgYGB\
gYCAgICAgH9/f39/f4CAgICAgICAgICAgICAgICAgICAgIB/f39/gICCgoODg4OAgHx8eXl3d3h4e3t/f4ODhISDg4KCgYGBgYKC\
goKCgoGBf399fXx8fHx9fYCAgoKDg4ODgYF/f35+fX1+fn9/f3+AgICAf39/f35+fn5/f4CAgICAgICAgIB/f39/f39/f4CAgICB\
gYGBgICAgH9/f3+AgICAgICAgH9/f3+AgIGBgoKDg4ODgIB9fXl5d3d4eHt7f3+CgoSEg4OBgYCAgICBgYKCg4OCgoCAfX18fHt7\
fX1/f4KCg4ODg4KCgIB+fn5+fn5/f4CAgICAgICAf39+fn5+fn5+fn9/gICAgICAgIB/f39/f39/f39/gICAgICAgICAgICAgIB/\
f39/f3+AgIGBgoKDg4ODgYF/f3x8eXl4eHl5fHx/f4KCg4ODg4KCgYGAgIGBgYGBgYCAf399fXx8fX1+foCAgoKCgoKCgYGAgH9/\
f39/f39/gICAgICAf39/f35+fn5/f39/gICAgICAgIB/f39/f39/f39/f39/f4CAgICAgIGBgICAgH9/f3+AgIGBg4ODg4ODgYF9\
fXp6eHh5eXt7f3+CgoODg4OCgoGBgICBgYGBgYGBgX9/fX18fHx8fX1/f4GBgoKCgoGBgIB+fn5+f3+AgICAgYGBgYCAf39/f39/\
f39/f4CAgICAgICAf4B/f39/f39/f39/gICAgICAgIB/f39/f3+AgIGBgoKDg4ODgoJ/f3x8enp5eXp6fX1/f4KCg4ODg4KCgYGB\
gYGBgYGBgYCAfn59fXx8fHx9fX9/gYGCgoGBgIB/f35+fn5/f4CAgICAgICAgIB/f39/f39/f4CAgICAgICAgICAgH9/f39/f39/\
f3+AgICAgIB/f39/f39/gIGBgoKDg4ODgYF/f3t7eXl5eXp6fX2AgIKCg4OCgoKCgYGBgYKCgoKBgYCAfn58fHx8fX1/f4CAgYGC\
goGBgIB+fn5+fn5/f39/gICAgICAgIB/f39/f39/f4CAgICAgICAgIB/f39/f39/f39/gICAgICAgICAgH9/gICBgYKCg4OCgoCA\
fX16enl5enp8fH9/gYGCgoKCgoKCgoGBgoKCgoGBgIB+fn19fHx9fX5+gICCgoKCgoKBgYCAfn5+fn5+fn5/f39/gICAgICAgIB/\
f39/f39/f4CAgICAgICAgIB/f39/f39/f4CAgICAgICAgYGBgYKCgoKBgYCAfn57e3p6enp8fH9/gYGCgoODgoKBgYCAgICBgYGB\
gIB/f35+fX19fX5+f3+AgIGBgYGBgICAf39/f39/gICAgICAgIB/f39/f39/f39/gICAgICAgICAgH9/f39/f39/f3+AgICAgICA\
gIGBgoKCgoKCgYF/f319e3t6enp6fHx/f4GBg4ODg4ODgoKBgYCAgICAgICAf39+fn19fX1+fn9/gICBgYGBgYGAgH9/fn5+fn9/\
f3+AgICAgIB/f39/f39/f39/gICAgICAgICAgH9/f39/f39/gICAgICAgYGBgYKCgoKBgX9/fX17e3p6enp8fH9/gYGCgoODgoKB\
gYGBgYGBgYGBgIB/f35+fX19fX5+gICBgYKCgYGBgX+Af39+fn9/f3+AgICAgICAgH9/f39/f39/f3+AgIB/f39/f39/gICAgICA\
gIB/f4CAgICBgYKCgoKCgoCAfX17e3p6e3t9fX9/gYGCgoKCgoKBgYGBgYGBgYGBgIB/f319fX19fX5+f3+AgIGBgYGBgYCAf39/\
f39/f39/f4CAgICAgH9/f39/f39/gICAgICAgYGAgICAf39/f39/f39/f4GBgoKCgoKCgYF/f3x8e3t7e3x8fn2AgIGBgoKCgoGB\
gYGBgYGBgYGBgYCAfn59fX19fn5/f4CAgYGBgYCAgIB/f39/f39/f39/gICAgICAf39/f39/f3+AgICAgICAgICAf39/f39/f39/\
f4CAgYGCgoODgoKAgH5+fHx7e3t7fHx+foCAgYGCgoKCgoKBgYGBgYGAgICAf39+fn19fX1+fn9/gICBgYGBgYGAgH9/f39/f39/\
f3+AgICAgIB/f39/f3+AgICAgICAgICAgICAgH9/f3+AgICAgYGBgYGBgIB/f319fHx7e3x8fX1/f4GBgoKCgoKCgYGBgYGBgYGB\
gYCAf39+fn19fX1+fn9/gICBgYGBgYGAgH9/f39+fn9/f39/f39/f39/f39/f39/gICAgICAgICAgICAgH9/gICAgIGBgoKCgoGB\
f399fXt7e3t7e319f3+BgYKCgoKCgoGBgYGBgYGBgICAgH9+fn59fX19fn5/f4GAgYGBgYCAf39/f35+f39/f4CAgICAgICAgIB/\
f39/f3+AgICAgICAgICAgICAgICAgYGCgoKCgYF/f319e3t7e3t7fX1/f4GBgoKCgoKCgYGBgYGBgYGAgICAf39+fn5+fn5+fn9/\
gICBgYGBgICAgH9/f39/f39/f3+AgICAgIB/f39/f39/f39/gICAgICAgICAgIGAgYGCgoKCgYF/f319fHx7e3x8fX1/f4GBgoKC\
goKCgYGBgYGBgICAgH9/fn59fX19fX1+foCAgYGBgYGBgIB/gH9/fn5+fn9/f3+AgICAgICAgH9/f39/f4B/gICAgICAgICBgYGB\
gYGBgYCAf399fXx8e3t8fH19f3+BgYKCgoKCgoGBgYGBgYGBgIB/f39/fn59fX19fn5/f4CAgYGBgYGBgIB/f39/f39/f39/f39/\
f39/f39/f4CAgICAgICAgICAgICAgYGBgYGBgIB/f319fHx8fHx8fX1/f4GBgoKCgoKCgYGBgYGBgYGAgH9/fn59fX19fX1+fn9/\
gICBgYGBgICAgH9/f39/f39/gICAgICAf39/f39/f3+AgICAgICAgIGBgYGBgYKCgYGAgH5+fX17fHt7fHx+foCAgYGCgoKCgYGB\
gYGBgYGBgYCAf39+fn19fX19fX5+f3+BgIGBgYGAgICAf39/f39/f3+Af4CAgICAgICAf39/f39/gICAgIGBgYGCgoKCgYF/f319\
fHx7e3x8fn5/f4GBgYGBgYGBgYGBgYGBgYGBgYCAf39+fn19fX1+fn9/gICAgIGBgICAgH9/f39/f39/gIB/f39/f39/f39/f3+A\
gICAgYCBgYKBgoKBgYCAf399fXx8e3t8fH5+f3+BgYKCgoKCgoGBgYGBgYGBgICAgH9/fn59fX19fn6AgIGBgYGBgYCAf39/f35+\
f39/f4CAgICAgICAgIB/f39/f3+AgICAgYGCgoKCgYGAgH5+fHx7e3x8fX1/f4GBgoKCgoGBgYGBgYGBgYGBgYCAf39+fn19fX1+\
fn9/gICBgYGBgIB/f39/f39/f39/f3+AgICAf39/f39/f3+AgICAgYGCgoKCgoKAgH5+fHx7e3t7fX1/f4CAgYGCgoGBgYGAgIGB\
gYGBgYCAf39+fn19fX1+fn9/gICBgYGBgYGAgH9/f39/f39/f3+AgICAf39/f39/f3+AgIGBgoKCgoKCgYF/f319fHx7e3x8fX1/\
f4GBgYKCgoGBgYGBgYGBgYGBgYCAf39+fn19fX1+fn9/gICBgYGBgIB/f39/f39/f4CAgICAgICAf39/f39/f3+AgIGBgoKCgoGB\
gIB+fnx8e3t8fH5+f3+BgYKCgoKBgYGBgICAgICAgICAgH9/fn5+fX5+fn5/f4CAgYGBgYCAf39/f35+f39/f4CAgICAgICAf39/\
f4CAgYGCgoKCgoKAgH5+fHx7e3x8fX1/f4CAgoKCgoGBgYGAgICAgICBgICAf39+fn19fX1+fn9/gICBgYGBgYGAgH9/fn5/f39/\
f3+AgICAgICAgICAgICBgYKCgoKBgX9/fX18fHt7fHx9fX9/gYGCgoKCgYGBgYGBgYGBgYCAgIB/f35+fX19fX5+f3+AgIGBgYGA\
gH+Af39/f39/f3+AgICAgICAgICAgICBgYGBgoKBgYCAfn58fHt7fHx9fX9/gYGCgoKCgoKBgYGBgICAgICAgIB/f35+fX19fX5+\
f3+AgIGBgYGAgICAf39/f39/f3+AgICAgICAgICAgICBgYGBgYGAgH9/fn58fXx8fX1+foCAgYGBgYGBgYGBgYCAgYGBgYCAgIB/\
f35+fn5+fn9/gICAgICAgIB/f39/f39/f39/gICAgICAgICAgIGBgYGBgYGBgIB/f319fHx8fH19fn6AgIGBgYKCgoGBgYGBgYGB\
gICAgH9/fn5+fn5+fn5/f4CAgYGAgICAf39/f39/f39/f4CAgICAgICAgICAgIGBgYGBgYCAfn59fX19fX1+fn9/gICBgYGBgYGA\
gICAgICAgICAgIB/f35+fn5+fn5+f3+AgICAgYGAgICAf39/f39/f39/f4CAgICBgYGBgYGBgYCAf39+fn19fHx9fX5+f3+BgYGB\
goGBgYGBgYGAgICAgIB/f39/fn5+fn5+fn5/f4CAgICAgICAgIB/f39/f39/f39/gICAgICAgYGBgYGBgIB/f35+fX19fX19f3+A\
gIGBgYGBgYGBgYGBgYGBgICAgH9/fn5+fn19fn5/f4CAgICBgYGBgICAgH9/f39/f39/f3+AgIGBgYGBgYGBgIB/f35+fX19fX5+\
f3+AgIGBgYGBgYGBgYGBgYGBgICAgH9/fn5+fn5+fn5/f4CAgICBgYCAgIB/f39/f39/f39/gICBgYGBgYGBgYCAf39+fn19fX19\
fX5+f3+AgIGBgYGBgYGBgYGBgYGBgICAgH9/fn59fX19fn5/f4CAgYGBgYCAgIB/f39/f39/f4CAgYGBgYGBgYGAgH9/fn59fX19\
fX1+fn9/gICBgYGBgYGBgYGBgYGAgICAgIB/f35+fn5+fn9/f3+AgICAgICAgH9/f39/f39/f3+AgICAgYGBgYGBgIB/f35+fX19\
fX19fn5/f4CAgYGBgYGBgYGBgYGBgICAgICAf39+fn5+fn5+fn9/gICAgIGBgICAgH9/f39/f39/gICBgYGBgYGAgH9/fn59fX19\
fX1+fn9/gICBgYGBgYGBgYGBgICAgICAgIB/f39/fn5+fn5+f3+AgICAgICAgH9/f39+fn5+f3+AgIGBgYGBgYGBgIB+fn19fX19\
fX5+f3+AgIGBgYGBgYGBgYGBgYGBgYGAgH9/f39+fn5+fn5/f4CAgICAgICAf39/f35+fn5/f4CAgYGBgYGBgIB/f35+fX19fX19\
fn5/f4CAgYGBgYGBgYGBgYGBgYGAgICAf39+fn5+fn5/f39/gICAgICAgIB/f39/f39/f39/gICAgICAgIB/f35+fX19fX5+fn5/\
f4CAgYGBgYGBgYGBgYGBgYGBgYCAf39/f35+fn5/f39/gICAgICAgIB/f39/f39/f39/gICAgICAf39+fn19fX19fX5+f3+AgIGB\
gYGBgYGBgYGBgYGBgYGBgYCAgIB/f35+fn5/f39/gICAgICAgIB/f39/f39/f4CAgICAgICAf39+fn19fHx9fX5+f3+AgIGBgYGB\
gYGBgYGBgYGBgYGAgICAf39/f39/f39/f4CAgICAgICAgIB/f39/f3+AgICAgICAgH9/fn59fX19fX1+fn9/gICBgYGBgYGBgYGB\
gYGBgYGBgICAgH9/f39/f39/f3+AgICAgICAgICAf39/f4CAgICAgICAgIB/f35+fX18fH19fX1/f4CAgYGBgYGBgYGBgYGBgYGB\
gYCAgIB/f39/f39/f39/gICAgICAgICAgH9/f3+AgICAgICAgIB/f39+fn19fX19fX5+f3+AgIGBgYGBgYGBgYGBgYCAgICAgH9/\
f39/f39/f3+AgICAgICAgICAgIB/f4CAgICAgICAf39/f35+fX19fX19fn5/f4CAgICBgYGBgYGAgICAgICAgICAgIB/f39/f39/\
f4CAgICAgICAgICAgICAgICAgICAgIB/f39/fn59fX19fX1+fn9/gICAgIGBgYGBgYGBgICAgICAgIB/f39/f39/f4CAgICAgICA\
gICAgICAgICAgICAgICAgH9/fn59fX19fX1+fn5+f3+AgIGBgYGBgYCAgICAgICAgIB/f39/f39/f39/f3+AgICAgICAgICAgYGB\
gYGBgICAgH9/fn5+fn19fX19fX5+f3+AgICAgYGBgYGBgICAgICAf39/f39/f39/f39/gICAgICAgICBgYGBgYGBgYCAgICAgH9/\
fn5+fn59fX1+fn5+f3+AgICAgYGBgYCAgICAgICAf39/f39/f39/f39/gICAgICAgICAgICAgICAgICAgICAgH9/f39+fn5+fn5+\
fn9/f3+AgICAgYGBgYCAgICAgH9/f39/f35+fn5/f39/gICAgICAgICBgYCAgICAgICAgIB/f39/fn5+fn5+fn5/f39/gICAgIGB\
gYGBgYCAgICAgH9/f39/f39/f39/f39/f3+AgICAgICBgYGBgYGAgICAf39/f35+fn5+fn5+f39/f4CAgICBgYGBgYGBgYCAgIB/\
f39/f39+fn5+f39/f39/gICAgICAgICBgYCAgICAgH9/fn5+fn5+fn5+fn9/gICAgIGBgYGBgYGBgYGAgICAf39/f39/f39/f39/\
f39/f4CAgICAgICAgICAgICAf39/f35+fn5+fn5+f39/f4CAgICBgYGBgYGBgYGBgICAgH9/f39/f39/f39/f39/gICAgICAgYGB\
gYCAgIB/f39/fn5+fn5+fn5+fn9/gICAgIGBgYGBgYGBgICAgICAf39/f39/f39/f39/gICAgICAgICAgICAgICAgH9/f39+fn5+\
fn5+fn5+f39/f4CAgICBgYGBgYGAgICAgICAgH9/f39/f39/f3+AgICAgICAgIGBgICAgICAf39/f35+fn5+fn5+fn5/f39/gICA\
gIGBgYGBgYCAgIB/f39/f39/f39/f39/f4CAgICBgYGBgYGBgYCAf39/f35+fn5+fn5+fn5/f39/gICAgIGBgYGAgICAgICAgH9/\
f39/f39/f39/f39/gICAgIGBgYGBgYGBgIB/f39/fn5+fn5+fn5+fn9/gICAgICAgYGBgYGBgICAgICAf39/f39/f39/f39/f3+A\
gICAgICAgICAgIB/f39/f39+fn5+fn5/f39/gICAgICAgYGBgYGAgICAgICAf39/f39/f39/f39/f3+AgICAgICAgICAgIB/f39/\
fn5+fn5+fn5/f39/gICAgIGAgYGBgYGBgICAgICAf39/f39/f39/f39/gICAgICAgICAgICAgIB/f35+fn5+fn5+fn5/f39/gICA\
gICAgICAgICAgICAgICAf39/f39/f39/f4CAgICAgICAgICAgICAf39/f35+fn5+fn5+fn9/f39/gICAgICAgICAgICAgICAgH9/\
f39/f39/f3+AgICAgICAgIGBgICAgICAf39/f35+fn5+fn9/f39/f4CAgICAgICAgICAgICAgIB/f39/f39/f39/f3+AgICAgYGB\
gYGBgICAgH9/f39+fn5+fn5/f39/gICAgICAgYGBgYCAgICAgH9/f39/f39/f39/f39/gICAgICAgYGAgICAf39/f35+fn5+fn5+\
f39/f4CAgICBgYGBgYGBgYCAgICAgH9/f39/f39/f39/f4CAgICAgICAgICAgH9/f39+fn5+fn5+fn9/f3+AgICAgYGBgYGBgYGA\
gICAf39/f39/f39/f39/gICAgICAgYGAgICAf39/f35+fn5+fn5+f39/f4CAgICAgICAgICAgICAgICAgH9/f39/f39/f39/f4CA\
gICAgICAgICAgH9/f39+f35+f39/f39/gICAgICAgICAgICAgICAgH9/f39/f39/f39/f4CAgICAgICAgICAgH9/f39/f35+fn5/\
f39/f3+AgICAgICAgICAgICAgICAf39/f39/f39/f39/f3+AgICAgICAgICAf39/f35+fn5+fn9/f39/f4CAgICBgYGBgYGBgYCA\
gICAgH9/f39/f39/f3+AgICAgICAgICAf39/f39/fn5+fn5+f39/f39/gICAgICAgIGAgICAgICAgH9/f39/f39/gICAgICAgICA\
gICAf39/f39/fn5+fn5+f39/f39/gICAgICAgICAgICAgICAgH9/f39/f39/f3+AgA==";
























//========================
//========================















